/**
 * @file index.ts
 * @author dworac <mail@dworac.com
 *
 * This is the entry point for the application.
 */
import "./utils/config";
import typeorm from "./typeorm";
import api from "./api";
import Logger from "./utils/logger";

/**
 * Main function.
 */
async function main() {
  // Typeorm
  await typeorm();

  // Express API
  await api();
}

main().catch((e) => {
  Logger.logError(e);
  process.exit(1);
});
