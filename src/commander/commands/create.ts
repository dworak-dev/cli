/**
 * @file src/commander/commands/create.ts
 * @author dworac <mail@dworac.com>
 *
 *     Create command for the CLI.
 *     This command creates a new project from a template.
 */

/* eslint-disable no-console */
import { Argument, Command } from "commander";
import path from "path";
import fs from "fs";
import chalk from "chalk";
import { execSync } from "child_process";
import inquirer from "inquirer";
import templatesInfo from "../../utils/templatesInfo";
import copyTemplate from "../../utils/copyTemplate";

const inquirerFolderAlreadyExists = async (name: string) => {
  const { folderAlreadyExists } = await inquirer.prompt([
    {
      name: "folderAlreadyExists",
      type: "confirm",
      default: false,
      message: `${chalk.blue(
        name
      )} directory already exists. Do you want to overwrite it?`,
    },
  ]);

  return folderAlreadyExists;
};

const onGenerate = async (
  name: string,
  template: string,
  options: {
    description: string;
    repository: string;
    keywords: string;
    author: string;
  }
) => {
  const { description, repository, keywords, author } = options;

  // The path must be the name provided by the user. If name contains '/' replace them with '-'
  const dirName = name.replace(/\//g, "-");
  // New project directory
  const newProjectPath = path.join(dirName);
  // Template directory
  const templatePath = path.join(__dirname, "..", "templates", template);
  // Find template from templates list
  const templateInfo = templatesInfo.find((t) => t.name === template);

  // If new project directory exists, delete it.
  if (fs.existsSync(newProjectPath)) {
    const folderAlreadyExists = await inquirerFolderAlreadyExists(name);

    if (!folderAlreadyExists) {
      console.log(chalk.red("\nAborting...\n"));
      return;
    }

    fs.rmSync(newProjectPath, { recursive: true });
  }

  // Create new project directory
  fs.mkdirSync(newProjectPath);

  // Copy template files to new project directory
  copyTemplate(templatePath, newProjectPath, {
    "template.name": name,
    "template.description": description,
    "template.repository": repository,
    "template.keywords": keywords.split(" ").join(","),
    "template.author": author,
  });

  // if git is installed, initialize new project directory as a git repository
  try {
    execSync("git init", { cwd: newProjectPath });
    // Create initial commit
    execSync("git add -A", { cwd: newProjectPath });
    execSync('git commit -m "feat: initial commit"', { cwd: newProjectPath });
  } catch {
    /* empty */
  }

  console.log(
    chalk.green(
      `Successfully created new project at ${chalk.blue(newProjectPath)}\n`
    )
  );
  console.log("We suggest that you begin by typing:");
  console.log(`  ${chalk.cyan("cd")} ${name}\n`);

  if (templateInfo?.commands) {
    templateInfo.commands.forEach((command) => {
      const { description: commandDescription, name: commandName } = command;
      const nameFirstWord = commandName.split(" ")[0];
      const nameRest = commandName.split(" ").slice(1).join(" ");

      console.log(commandDescription);
      console.log(`  ${chalk.cyan(nameFirstWord)} ${nameRest}\n`);
    });
  }

  console.log(
    `You can find more information at the ${chalk.blue("README.md")} file`
  );

  if (templateInfo?.secrets) {
    console.log(
      chalk.yellow(
        `\nThis template contains some github workflows which need the following secrets to be added to github.\n`
      )
    );

    templateInfo.secrets.forEach((secret) => {
      const { name: secretName, description: secretDescription } = secret;
      console.log(secretDescription);
      console.log(`  ${chalk.cyan(secretName)}\n`);
    });
  }
};

export default (program: Command) => {
  program
    .command("create")
    .description("Generates a new project from a template")
    .argument("<name>", `The new project's name`)
    .addArgument(
      new Argument("<template>", `The project's template to use.`).choices(
        templatesInfo.map((template) => template.name)
      )
    )
    .option(
      "-d, --description <string>",
      "New project description",
      "A new project"
    )
    .option(
      "-r, --repository <string>",
      "New project git repository",
      "https://github.com/dworac"
    )
    .option("-k, --keywords <string>", "New project keywords", "dworac")
    .option(
      "-a, --author <string>",
      "New project author",
      "dworac <mail@dworac.com>"
    )
    .action(onGenerate)
    .addHelpText(
      "after",
      `Examples:
      
Generate a new project without options:
    ${chalk.blue("npx @dworac/cli create my-project typescript-lib-node")}
    
Generate a new project with a description, git repository, keywords, and author:
    ${chalk.blue(
      `npx @dworac/cli create my-project typescript-lib-node -d "My project description" -r "https://github.com/dworac/cli" -k "cli template generator" -a "dworac <mail@dworac.com>"`
    )}
`
    );
};
