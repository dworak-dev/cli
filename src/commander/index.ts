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
  program.addHelpText("beforeAll", `\n${chalk.white(header)}\n`);
  program.version("2.8.0", "-v"); // x-release-please-version
  program.name("npx @dworac/cli");

  commands(program);

  await program.parseAsync();
};
