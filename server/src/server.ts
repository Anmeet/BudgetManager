import validateEnv from './utils/validateEnv';
import ErrorMiddleware from './middlewares/ErrorHandler';
import App from './app';

validateEnv();

const app = new App();

app.listen();

ErrorMiddleware.initializeUnhandledException();
