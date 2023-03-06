/**
 * @file src/templates.ts
 * @author dworac <mail@dworac.com>
 *
 * List of available templates.
 */
import fs from "fs";
import path from "path";

const a = path.join(__dirname, "..", "templates/");
const templates = fs.readdirSync(a);

export default templates;
