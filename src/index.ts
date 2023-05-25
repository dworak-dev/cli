#!/usr/bin/env node

/**
 * @file src/index.ts
 * @author dworac <mail@dworac.com>
 *
 * Entry point for the CLI.
 */
import Logger from "@dworac/logger";
import commander from "./commander";

/**
 * Main function.
 */
async function main() {
  await commander();
}

main().catch((e) => {
  Logger.logError(e);
  process.exit(1);
});
