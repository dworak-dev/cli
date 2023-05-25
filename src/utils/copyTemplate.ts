/**
 * @file src/copyTemplate.ts
 * @author dworac <mail@dworac.com>
 *
 * Copy template files to new project directory
 */
import fs from "fs";
import path from "path";

const replaceString = (original: string, search: string, replace: string) => {
  return original.replace(new RegExp(search, "g"), replace);
};

const foldersToIgnore = [
  "node_modules",
  ".idea",
  ".vscode",
  ".git",
  "coverage",
  "dist",
];

const filesToIgnore = ["template.json"];

/**
 * @param {string} templatePath - Path to template directory
 * @param {string} newProjectPath - Path to new project directory
 * @param {object} toReplace - Object with keys to replace
 */
const copyTemplate = (
  templatePath: string,
  newProjectPath: string,
  toReplace?: { [key: string]: string }
) => {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = path.join(templatePath, file);

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      if (filesToIgnore.includes(file)) {
        return;
      }
      let contents = fs.readFileSync(origFilePath, "utf8");

      if (toReplace) {
        Object.keys(toReplace).forEach((key) => {
          contents = replaceString(contents, key, toReplace[key]);
        });
      }

      if (file === "gitignore") {
        // eslint-disable-next-line no-param-reassign
        file = ".gitignore";
      }

      const writePath = path.join(newProjectPath, file);
      fs.writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      if (foldersToIgnore.includes(file)) {
        return;
      }
      fs.mkdirSync(path.join(newProjectPath, file));

      // recursive call
      copyTemplate(
        path.join(templatePath, file),
        path.join(newProjectPath, file),
        toReplace
      );
    }
  });
};

export default copyTemplate;
