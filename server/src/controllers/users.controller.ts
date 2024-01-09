import { CreateUserDto } from '@/dtos/users.dto';
import userService from '@services/users.service';
import { NextFunction, Request, Response } from 'express';

class UsersController {
  public userService = new userService();

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const usersData = await this.userService.findAllUsers();
      res.status(200).json({
        data: usersData,
        message: 'Users fetched successfully',
      });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const createUserData = await this.userService.createUser(userData);
      res.status(201).json({
        data: createUserData,
        message: 'User created successfully',
      });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
