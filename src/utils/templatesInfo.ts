/**
 * @file src/utils/templates.ts
 * @author dworac <mail@dworac.com>
 *
 *     Exports a list of all templates.
 */
import fs from "fs";
import path from "path";

interface TemplateInfo {
  name: string;
  description?: string;
  commands?: {
    name: string;
    description: string;
  }[];
  secrets?: {
    name: string;
    description: string;
  }[];
}

const getTemplatesInfo = (): TemplateInfo[] => {
  const templates: TemplateInfo[] = [];
  const templatesDirs = fs.readdirSync(
    path.join(__dirname, "..", "templates/")
  );

  // For each template directory
  templatesDirs.forEach((templateDir) => {
    let template: TemplateInfo = {
      name: templateDir,
    };
    const templatePath = path.join(__dirname, "..", "templates", templateDir);
    const templateJsonPath = path.join(templatePath, "template.json");

    // If template.json exists, read it
    if (fs.existsSync(templateJsonPath)) {
      template = JSON.parse(fs.readFileSync(templateJsonPath, "utf8"));
    }

    templates.push(template);
  });

  return templates;
};

export default getTemplatesInfo();
