/**
 * @file index.ts
 * @author dworac <mail@dworac.com>
 *
 * This is the entry point for the application.
 */

import Logger from "@dworac/logger";
import { sum, ISum } from "./sum";

const res = sum({
  a: 1,
  b: 2,
});
Logger.logInfo(`1 + 2 = ${res}`);

export { sum, ISum };
