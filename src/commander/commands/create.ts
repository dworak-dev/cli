/**
 * @file src/commander/commands/create.ts
 * @author dworac <mail@dworac.com>
 *
 *     Create command for the CLI.
 *     This command creates a new project from a template.
 */
import { Argument, Command } from "commander";
import path from "path";
import fs from "fs";
import chalk from "chalk";
import { execSync } from "child_process";
import templates from "../../utils/templates";
import copyTemplate from "../../utils/copyTemplate";

const onGenerate = (
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

  // New project directory
  const newProjectPath = path.join(name);
  // Template directory
  const templatePath = path.join(__dirname, "..", "templates", template);

  // If new project directory exists, delete it.
  if (fs.existsSync(newProjectPath)) {
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
  } catch {
    /* empty */
  }

  // eslint-disable-next-line no-console
  console.log(
    chalk.green(
      `Successfully created new project at ${chalk.blue(newProjectPath)}\n`
    )
  );
  // eslint-disable-next-line no-console
  console.log("We suggest that you begin by typing:");
  // eslint-disable-next-line no-console
  console.log(`  ${chalk.cyan("cd")} ${name}\n`);
  // eslint-disable-next-line no-console
  console.log(
    `You can find more information at the ${chalk.blue("README.md")} file\n`
  );
};

export default (program: Command) => {
  program
    .command("create")
    .description("Generates a new project from a template")
    .argument("<name>", `The new project's name`)
    .addArgument(
      new Argument("<template>", `The project's template to use.`).choices(
        templates
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
    .action(onGenerate);
};
