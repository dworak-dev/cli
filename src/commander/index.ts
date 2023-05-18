/**
 * @file src/commander/index.ts
 * @author dworac <mail@dworac.com>
 *
 *     Main file for the commander module.
 */
import chalk from "chalk";
import { program } from "commander";
import header from "./header";
import commands from "./commands";

export default async () => {
  program.exitOverride();
  program.addHelpText("beforeAll", `\n${chalk.white(header)}\n`);
  program.name("npx @dworac/cli");
  commands(program);

  try {
    await program.parseAsync(process.argv);
  } catch (err) {
    if ((err as Error).message !== "(outputHelp)") {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }
};
