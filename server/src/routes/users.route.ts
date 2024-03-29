import { Router } from 'express';
import UsersController from '@controllers/users.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import RequestValidator from '@/middlewares/validation.middleware';

class UsersRoute implements Routes {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getUsers);
    this.router.post(`${this.path}`, RequestValidator.validate(CreateUserDto, 'body'), this.usersController.createUser);
  }
}

export default UsersRoute;
