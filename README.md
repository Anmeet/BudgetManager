<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h2 align="center">Budget Manager with Express, Typescript, Docker and MongoDB FrontEnd Stack to Follow on... </h2>
</div>

## Documentation

[You can find the full documentation here](https://link-to-be-added-later/)

## About The Project

The Application will help user to manage his/her budget.

- Typescript all the way
- EsLint, Prettier and Husky integration
- Docker
- MongoDB
- Multiple Environments
- Error handling in a central place
- Request Validation
- Swagger API documentation
- Dependency Injection
- Setting up Testing
- FrontEnd Stack to Follow on...



<p align="right">(<a href="#top">back to top</a>)</p>




<p align="right">(<a href="#top">back to top</a>)</p>

## Technologies

The major technologies that will be used to build this project are:

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

Here goes the instructions to get the project up and running.

### Prerequisites

To run this project You will need the following things installed on your machine

- NodeJS
- NPM
- Docker (Optional)

### Run with Docker

It's super simple. If you already have Docker installed and running on your machine you can just run

```sh
docker-compose up
```

It will give you 3 things

1. The Express server in development mode (With hot reloading support)
2. A MongoDB database server. The credentials are

```sh
MONGODB_USERNAME=root
MONGODB_PASSWORD=root
```


If you want to change or update any code you can just make the change and from the console you will see that the server is getting updated.

### Run without docker

If you don't use Docker then you will get an exception specifying you don't have any database.
TO avoid that you can do 2 things.

1. First go inside the `.env.development` file and specify the following variables of a database server that you are using.

```
MONGODB_USERNAME=root
MONGODB_PASSWORD=root
```

## Project Structure

If you want to add a new route then you will goto `/routes` folder and add a new Router.
Then register that router in the `server.ts` file under the `/routes` folder.

Then you will create a Controller under the `/controllers` directory.All business logics should go into there.

Specific use cases should be handles by Service classes under the `/service` folder.

To create a new model for data base look into the `/models` folder.



<p align="right">(<a href="#top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/Anmeet/BudgetManager.svg?style=for-the-badge
[contributors-url]: https://github.com/Anmeet/BudgetManager/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Anmeet/BudgetManager.svg?style=for-the-badge
[forks-url]: https://github.com/Anmeet/BudgetManager/network/members
[stars-shield]: https://img.shields.io/github/stars/Anmeet/BudgetManager.svg?style=for-the-badge
[stars-url]: https://github.com/Anmeet/BudgetManager/stargazers
[issues-shield]: https://img.shields.io/github/issues/Anmeet/BudgetManager.svg?style=for-the-badge
[issues-url]: https://github.com/Anmeet/BudgetManager/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/amit-bhandari-153785110/
