# @dworac/cli

![npm](https://img.shields.io/npm/v/@dworac/cli)
![npm](https://img.shields.io/npm/dw/@dworac/cli)
![GitHub issues](https://img.shields.io/github/issues/dworac/cli)
![GitHub](https://img.shields.io/github/license/dworac/cli)

This is dworac's CLI tool. It is used to create new projects from several templates and more...

# Usage
This is a command-line tool that generates a new project from a template. You can use it with `npx` or install it globally.

```shell
npx @dworac/cli
```

## Help
In order to get help, you can use the `--help` flag.

```shell
npx @dworac/cli --help
```

## Project generator

In order to obtain a list of available templates, you can use the `list` command.

```shell
npx @dworac/cli templates
```

To create a new project, run the following command:

```shell
npx @dworac/cli create <name> <template>
```

### Options
* -d, --description <string>: The description of the new project.
* -r, --repository <string>: The git repository of the new project.
* -k, --keywords <string>: The keywords of the new project.
* -a, --author <string>: The author of the new project.

## Examples
Generate a new project without options:

```shell
npx @dworac/cli create my-project typescript-lib-node
```

Generate a new project with a description, git repository, keywords, and author:
```shell
npx @dworac/cli create my-project typescript-lib-node -d "My project description" -r "https://github.com/dworac/cli" -k "cli template generator" -a "dworac <mail@dworac.com>"
```

## Developping

In order to develop this project, you can use the following commands:

Install dependencies:
```shell
yarn
```

Run
```shell
yarn start:dev
```

In order to test the project locally you must build it and link it globally, the following command does both things:
```shell
yarn publish:local
```

To test it run the following command:
```shell
npx @dworac/cli
```

To unlink the project, you can use the following command:
```shell
yarn publish:local:unlink
```

## Contributing
If you have any suggestions or improvements, please feel free to create a pull request or submit an issue.

### Add a template

Adding a new template is very simple:

- Create a new folder with the name of the template in the `templates` folder.
- Add a template.json file to your template folder
- If you have any `.gitignore` files rename them to `gitignore`

#### template.json

`template.json` file should be in each one of the templates folder and it should look something like this.

```json
{
  "name": "typescript-api",
  "description": "This template is used to create an express server with typescript, grahpql, typeorm, and postgres.",
  "commands": [
    {
      "name": "yarn",
      "description": "Install dependencies"
    }
  ],
  "secrets": [
    {
      "name": "DIGITALOCEAN_APP_NAME",
      "description": "Name of the digital ocean app the project will be deployed to."
    }
  ]
}
```

This file helps document the template for the cli's output.
All of the properties are optional but recommended: 

```typescript
interface TemplateInfo {
    name: string;
    description?: string;
    commands?: {
        name: string;
        description: string;
    }[]; // Recommended commands, starter commands.
    secrets?: {
        name: string;
        description: string;
    }[]; // Secrets needed for github workflows to work.
}
```


## License
This project is licensed under the MIT license. Please see the LICENSE file for more information.


