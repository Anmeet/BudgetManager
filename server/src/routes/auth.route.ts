import { CreateUserDto } from '@/dtos/users.dto';
import { Router } from 'express';
import AuthController from '@/controllers/auth.controller';
import { SignInRequest } from '@dtos/SignInRequest';
import RequestValidator from '@/middlewares/validation.middleware';
import { Routes } from '@/interfaces/routes.interface';

class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}signup`, RequestValidator.validate(CreateUserDto, 'body'), AuthController.signUp);
    this.router.post(`${this.path}signin`, RequestValidator.validate(SignInRequest, 'body'), AuthController.signIn);
    this.router.get(`${this.path}test`, AuthController.test);
  }
}

export default AuthRoute;
