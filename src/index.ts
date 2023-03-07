#!/usr/bin/env node

/**
 * @file src/index.ts
 * @author dworac <mail@dworac.com>
 *
 * Entry point for the CLI.
 */

import chalk from "chalk";
import { program } from "commander";
import onGenerate from "./onGenerate";
import templates from "./templates";

const header = `██████╗ ██╗    ██╗ ██████╗ ██████╗  █████╗  ██████╗
██╔══██╗██║    ██║██╔═══██╗██╔══██╗██╔══██╗██╔════╝
██║  ██║██║ █╗ ██║██║   ██║██████╔╝███████║██║
██║  ██║██║███╗██║██║   ██║██╔══██╗██╔══██║██║     
██████╔╝╚███╔███╔╝╚██████╔╝██║  ██║██║  ██║╚██████╗
╚═════╝  ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝
    
    ${chalk.blue("dworac CLI")}`;

program.addHelpText("beforeAll", `\n${chalk.white(header)}\n`);

program.name("@dworac/typescript-starter").description("dworac's CLI");

const templateString = templates.join(", ");

program
  .command("create")
  .description("Generates a new project from a template")
  .argument("<name>", `The new project's name`)
  .option(
    "-t --template <string>",
    `The template to use for generating the new project: ${templateString}`
  )
  .option("-d, --description <string>", "New project description")
  .option("-r, --repository <string>", "New project git repository")
  .option("-k, --keywords <string>", "New project keywords")
  .option("-a, --author <string>", "New project author")
  .action(onGenerate);

program
  .command("templates")
  .description("Lists all available templates")
  .action(() => {
    /* eslint-disable no-console */
    console.log(`Available templates:`);
    /* eslint-disable no-console */
    templates.forEach((template) => console.log(chalk.blue(`- ${template}`)));
  });

program.parse();
