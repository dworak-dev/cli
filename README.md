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

## Project generator

To create a new project, run the following command:

```shell
npx @dworac/cli template-generator my-project
```

### Options
* -t, --template <string>: The template to use for generating the new project. If not specified, the tool will use a default template.
* -d, --description <string>: The description of the new project.
* -r, --repository <string>: The git repository of the new project.
* -k, --keywords <string>: The keywords of the new project.
* -a, --author <string>: The author of the new project.

## Examples
Generate a new project with default options:

```shell
npx @dworac/cli template-generator my-project
```

Generate a new project with a specific template:
```shell
npx @dworac/cli template-generator my-project -t typescript-lib-node
```

Generate a new project with a description, git repository, keywords, and author:
```shell
npx @dworac/cli template-generator my-project -d "My project description" -r "https://github.com/dworac/cli" -k "cli template generator" -a "dworac <mail@dworac.com>"
```

To list all available templates, run the following command:
```shell
npx @dworac/cli templates
```

## Contributing
If you have any suggestions or improvements, please feel free to create a pull request or submit an issue.

## License
This project is licensed under the MIT license. Please see the LICENSE file for more information.


