import validateEnv from '@utils/validateEnv';
import ErrorMiddleware from '@/middlewares/error.middleware';
import App from './app';
import AuthRoute from '@/routes/auth.route';
import IndexRoute from '@/routes/index.route';
import UsersRoute from '@/routes/users.route';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

app.listen();

ErrorMiddleware.initializeUnhandledException();
