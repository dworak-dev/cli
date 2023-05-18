/**
 * @file src/utils/templates.ts
 * @author dworac <mail@dworac.com>
 *
 *     Exports a list of all templates.
 */
import fs from "fs";
import path from "path";

const templates = fs.readdirSync(path.join(__dirname, "..", "templates/"));

export default templates;
