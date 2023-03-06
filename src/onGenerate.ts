/**
 * @file src/onGenerate.ts
 * @author dworac <mail@dworac.com>
 *
 * When a new project is generated, this function is called.
 */

/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
import fs from "fs";
import path from "path";
import { IOptions } from "./IOptions";
import templates from "./templates";
import copyTemplate from "./copyTemplate";

const onGenerate = (name: string, options: IOptions) => {
  if (options.template === undefined) options.template = templates[0];
  if (options.description === undefined) options.description = "A new project";
  if (options.repository === undefined)
    options.repository = "https://github.com/dworac/typescript-starter";
  if (options.keywords === undefined) options.keywords = "typescript dworac";
  if (options.author === undefined) options.author = "dworac <mail@dworac.com>";

  const { template, description, repository, keywords, author } = options;

  // New project directory
  const newProjectPath = path.join(__dirname, "..", name);
  // Template directory
  const templatePath = path.join(__dirname, "..", "templates", template);

  // If new project directory exists, delete it.
  if (fs.existsSync(newProjectPath)) {
    fs.rmSync(newProjectPath, { recursive: true });
  }

  // Create new project directory
  fs.mkdirSync(newProjectPath);

  // Copy template files to new project directory
  copyTemplate(templatePath, newProjectPath, {
    "template.name": name,
    "template.description": description,
    "template.repository": repository,
    "template.keywords": keywords.split(" ").join(","),
    "template.author": author,
  });
};

export default onGenerate;
