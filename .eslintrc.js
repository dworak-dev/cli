/**
 * @file .eslintrc.js
 * @author dworac <mail@dworac.com>
 *
 * Eslint configuration file
 */
module.exports = {
  extends: ["@dworac/eslint-config-typescript"],
  ignorePatterns: [
    "node_modules/*",
    "dist/*",
    "coverage/*",
    ".husky/*",
    ".github/*",
    "templates/**/*",
  ],
};
