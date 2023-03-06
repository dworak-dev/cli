/**
 * @file index.ts
 * @author dworac <mail@dworac.com>
 *
 * This is the entry point for the application.
 */

import sum from "./sum";

/**
 * Main function.
 */
async function main() {
  // eslint-disable-next-line no-console
  console.log("Hello world from TypeScript!");
  // eslint-disable-next-line no-console
  console.log("1 + 1 = ", sum(1, 1));
}

main().catch(() => {
  process.exit(1);
});
