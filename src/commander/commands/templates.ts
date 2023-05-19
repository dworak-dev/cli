/**
 * @file src\commander\commands\templates.ts
 * @author dworac <mail@dworac.com>
 *
 *     Exports a function that adds the "templates" command to the commander program.
 */
import { Command } from "commander";
import chalk from "chalk";
import path from "path";
import fs from "fs";
import templates from "../../utils/templates";

export default (program: Command) => {
  program
    .command("templates")
    .description("Lists all available templates")
    .action(() => {
      /* eslint-disable no-console */
      console.log(`\nAvailable templates:\n`);
      /* eslint-disable no-console */
      templates.forEach((template) => {
        // try to get template.json file from template directory
        const templatePath = path.join(__dirname, "..", "templates", template);
        const templateJsonPath = path.join(templatePath, "template.json");

        console.log(chalk.blue(`- ${template}`));

        if (fs.existsSync(templateJsonPath)) {
          const templateJson = JSON.parse(
            fs.readFileSync(templateJsonPath, "utf8")
          );
          console.log(`   ${templateJson.description}`);
        }
      });
      console.log("");
    });
};
