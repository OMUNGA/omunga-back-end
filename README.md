<p align="center">  
    🧑🏾‍💻
</p>

# OMUNGA
## Angolan IT article Platform

This is a project created with the main objective of encouraging the sharing of content by IT professionals in Angola.

### objective
Create an API that allows requests
of users to publish articles, comments, likes, surveys.

## Description

We value good practices in the development of the solution.

It is advisable to use the **Conventional Commits** practice, as this is the only way that the changes can be merged into a built-in hook that blocks commit messages that do not follow this practice. [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

Application developed in javascript language.

We use some concepts for application development.

Pattern implementations to solve typical and repetitive problems.

Integrated SonarCloud in CI/CD pipeline is being used to review automated clean code checks.

## Contributing

For major changes, open a problem first to discuss what you would like to change.

### Codification

> Attention, do not write, change or delete anything in the code from the main branch (default), for any new functionality you must create a new branch 

- To create a new branch run the command `git checkout -b <branch-name>`
    - To switch from one branch to another existing in your local repository run `git checkout <branch-name>` without `-b`

- Once you have finished coding on the new branch, push it to GitHub with the command `git push -u origin <branch-name>`
    - After this step, open a pull-request for the main branch and wait for the Admin to analyze and merge the pull-request

> Attention don't forget to test the code because the use of this practice is recurrent in the development because we have a tool that evaluates the code. (TDD)

Omunga Components
- User
- Social Network
- Follow
- Followers
- Post
- Comment

![alt](docs/img/Captura%20de%20ecr%C3%A3%202022-11-09%20113950.png)

## Installation

```bash
$ npm install or yarn install
```

### Running the app with docker
  ```bash
# development
$ docker-compose up
```


### Running the app 

```bash

# development
$ npm run dev

# or
$ yarn dev
```

### Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

### Running the migrations
  ```bash
# development
$ yarn migration:run

```

### Create migration
  ```bash
# development
$ yarn migration:create --name=name_migration

```

### Revert Migration
  ```bash
# development
$ yarn migration:revert

```

## License

Nest is [MIT licensed](LICENSE).