import validateEnv from '@utils/validateEnv';
import ErrorMiddleware from '@middlewares/ErrorHandler';
import App from './app';
import AuthRoute from '@routes/AuthRoute';
import IndexRoute from '@routes/IndexRoute';

validateEnv();

const app = new App([new AuthRoute(), new IndexRoute()]);

app.listen();

ErrorMiddleware.initializeUnhandledException();
