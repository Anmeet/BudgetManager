import { getUsers } from './open-api/get-users';

export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'APIs Document',
    description: 'API Document of Budger Manager',
    termsOfService: '',
    contact: {
      name: 'Amit Bhandari',
      email: 'anmeet619@gmail.com',
      url: 'amit-bhandari.netlify.app/',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  tags: [
    {
      name: 'Users',
    },
  ],
  paths: {
    '/auth/users': {
      get: getUsers,
    },
  },
  servers: [
    {
      url: 'http://localhost:3000/api/v1',
      description: 'Development Server',
    },
    {
      url: 'https://production_url/api/v1',
      description: 'Production Server',
    },
  ],
};
