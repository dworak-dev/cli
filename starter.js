#!/usr/bin/env node

const {execSync} = require('child_process');
const fs = require('fs')
const fse = require('fs-extra')
const chalk = require('chalk')
const inquirer = require('inquirer');

const validateName = input => input.length > 3 || 'Name must be longer than 3 letters';
const validateDescription = input => input.length > 3 || 'Description must be longer than 3 letters';
const validateRepoUrl = input => /^https?:\/\/\S+$/.test(input) || 'Repository URL must be a valid URL starting with http:// or https://';

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the project?',
        validate: validateName,
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?',
        validate: validateDescription,
    },
    {
        type: 'input',
        name: 'repository',
        message: 'What is the repository URL of the project?',
        validate: validateRepoUrl,
    },
    {
        type: 'input',
        name: 'keywords',
        message: 'What are the keywords of the project? (separated by spaces)',
    },
];

const promptUser = () => {
    return new Promise((resolve, reject) => {
        inquirer.prompt(questions)
            .then(answers => {
                resolve(answers);
            })
            .catch(error => {
                reject(error);
            });
    });
};

(async () => {
    const answers = await promptUser();

    const {name, description, repository, keywords} = answers;

    const dir = name;

    if (fs.existsSync(dir)) {
        fs.rmdirSync(dir, {recursive: true})
    }

    fs.mkdirSync(dir)

    const filesToCopy = [
        '.eslintignore',
        '.eslintrc.js',
        '.gitignore',
        'jest.config.js',
        'LICENSE.md',
        'nodemon.json',
        'package.json',
        'README.md',
        'tsconfig.json',
        'yarn.lock',
        'src',
        '.github',
        '.husky'
    ]

    console.log(chalk.blue('********************************'))
    console.log(chalk.blue('Copying files...'))
    console.log(chalk.blue('********************************'))


    fs.readdirSync(__dirname).forEach(file => {
        if (filesToCopy.includes(file)) {
            console.log(chalk.gray(`Copying ${file}...`))
            fse.copySync(__dirname+'/'+file, `${dir}/${file}`)
        }
    })

// change package.json version, package name, description and git repo
    const packageJson = fs.readFileSync(`${dir}/package.json`)
    const packageJsonParsed = JSON.parse(packageJson.toString())
    packageJsonParsed.name = dir
    packageJsonParsed.version = '1.0.0'
    packageJsonParsed.description = description
    packageJsonParsed.repository.url = `git+${repository}.git`
    packageJsonParsed.keywords = keywords.split(' ')
    packageJsonParsed.bugs.url = `${repository}/issues`
    packageJsonParsed.homepage = `${repository}#readme`
    delete packageJsonParsed.bin
    console.log(packageJsonParsed)
    fs.writeFileSync(`${dir}/package.json`, JSON.stringify(packageJsonParsed, null, 2))


    const readme = fs.readFileSync(`${dir}/README.md`)
    const readmeParsed = readme.toString()
        .replace(/# @dworac\/typescript-starter/g, `# ${dir}`);

    fs.writeFileSync(`${dir}/README.md`, readmeParsed)


    process.chdir(dir);
    console.log(chalk.blue('\n********************************'))
    console.log(chalk.blue('Initializing git...'))
    console.log(chalk.blue('********************************'))
    execSync('git init', {stdio: 'inherit'});

    console.log(chalk.blue('\n********************************'))
    console.log(chalk.blue('Installing dependencies...'))
    console.log(chalk.blue('********************************'))
    execSync('yarn install', {stdio: 'inherit'});

    // Next steps
    console.log(chalk.white('\n********************************'))
    console.log(chalk.white('1. Change directory:'))
    console.log(chalk.white('********************************'))
    console.log(chalk.blue(`cd ${dir}\n`))

    console.log(chalk.white('********************************'))
    console.log(chalk.white('2. Start:'))
    console.log(chalk.white('********************************'))
    console.log(chalk.blue('yarn start:dev'))
})()




