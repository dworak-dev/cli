# template.name

This is a template repository for setting up a GraphQL API project with TypeScript, TypeORM, and more. It serves as a great starting point for building robust, type-safe APIs and helps you quickly get started on your API development journey.

## Features

- **TypeScript:** Leveraging TypeScript for static types and modern JavaScript features.
- **GraphQL:** Building a performant, type-safe API with Apollo Server and GraphQL.
- **TypeORM:** Managing your database and entities in an object-oriented way with TypeORM.
- **ESLint:** Ensuring the quality and uniformity of your code with ESLint.
- **Jest:** Writing and running tests with Jest.
- **esbuild:** Compiling and bundling your code quickly with esbuild.
- **Husky:** Managing git hooks with Husky, automating tasks like linting and testing.
- **nodemon:** Automatically restarting your application when file changes in the directory are detected.

### Development

To install packages run:
```shell
yarn
```

To start the project in development mode, use the following command:

```shell
npm run start:dev
```

### Linting and Testing

Here are some other scripts that could come in handy:

- `lint`: This runs ESLint on your project.
- `lint:fix`: This runs ESLint and automatically fixes any issues that it can.
- `test`: This runs Jest to test your project.

### TypeORM Commands

Use these commands for managing TypeORM migrations:

- `typeorm:generate`: This generates a new migration file.
- `typeorm:run`: This runs all pending migrations.
- `typeorm:show`: This shows all migrations and whether they've been run.

### Environment Variables

This project uses several environment variables for configuration. These variables should be defined in a `.env` file in the root directory of the project. Below is a list of the necessary environment variables:

```bash
# Database configuration (for TypeORM)
TYPEORM_HOST=                  # The hostname of your database
TYPEORM_PORT=                  # The port number on which your database is running
TYPEORM_USERNAME=              # The username for your database
TYPEORM_PASSWORD=              # The password for your database
TYPEORM_DATABASE=              # The name of your database

# Port number on which the API server should run
PORT=

# Google OAuth configuration
GOOGLE_CLIENT_ID=              # The client ID for your Google OAuth setup
GOOGLE_CLIENT_SECRET=          # The client secret for your Google OAuth setup
GOOGLE_CALLBACK=               # The callback URL for your Google OAuth setup

# JWT configuration
JWT_SECRET=                    # The secret key used for signing JWTs
```

Please replace the placeholders with your actual data. Remember not to expose your `.env` file publicly, as it contains sensitive data.

## Contributing
If you have any suggestions or improvements, please feel free to create a pull request or submit an issue.

## License
This project is licensed under the MIT license. Please see the LICENSE file for more information.
