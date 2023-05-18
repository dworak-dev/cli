/**
 * @file src\commander\commands\index.ts
 * @author dworac <mail@dworac.com>
 *
 *     Exports the commands to be used by the commander program.
 */
import { Command } from "commander";
import templates from "./templates";
import create from "./create";

export default (program: Command) => {
  templates(program);
  create(program);
};
