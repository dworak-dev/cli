#!/usr/bin/env node

/**
 * @file src/index.ts
 * @author dworac <mail@dworac.com>
 *
 * Entry point for the CLI.
 */
import chalk from "chalk";
import commander from "./commander";

/**
 * Main function.
 */
async function main() {
  await commander();
}

main().catch((e) => {
  // eslint-disable-next-line no-console
  console.log(chalk.red(e));
  process.exit(1);
});
