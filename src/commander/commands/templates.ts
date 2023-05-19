/**
 * @file src\commander\commands\templates.ts
 * @author dworac <mail@dworac.com>
 *
 *     Exports a function that adds the "templates" command to the commander program.
 */
/* eslint-disable no-console */
import { Command } from "commander";
import chalk from "chalk";
import templatesInfo from "../../utils/templatesInfo";

export default (program: Command) => {
  program
    .command("templates")
    .description("Lists all available templates")
    .action(() => {
      console.log(`\nAvailable templates:\n`);

      templatesInfo.forEach((templateInfo) => {
        console.log(chalk.blue(`- ${templateInfo.name}`));
        if (templateInfo.description) {
          console.log(`   ${templateInfo.description}`);
        }
      });

      console.log();
    });
};
