/**
 * @file src\commander\commands\templates.ts
 * @author dworac <mail@dworac.com>
 *
 *     Exports a function that adds the "templates" command to the commander program.
 */
import { Command } from "commander";
import chalk from "chalk";
import templates from "../../utils/templates";

export default (program: Command) => {
  program
    .command("templates")
    .description("Lists all available templates")
    .action(() => {
      /* eslint-disable no-console */
      console.log(`\nAvailable templates:\n`);
      /* eslint-disable no-console */
      templates.forEach((template) => console.log(chalk.blue(`- ${template}`)));
      console.log("");
    });
};
