import { CreateUserDto } from '@/dtos/users.dto';
import { HttpException } from '@/exceptions/HttpException';
import { IUserModel } from '@/interfaces/users.interface';
import User from '@/models/users.model';
import { Nullable } from '@/types/index';
import { isEmpty } from '@/utils/util';

class UserService {
  public users = User;

  public async findAllUsers(): Promise<IUserModel[]> {
    const users: IUserModel[] = await this.users.find();
    return users;
  }
  public async createUser(userData: CreateUserDto): Promise<IUserModel> {
    if (isEmpty(userData)) throw new HttpException(400, 'You are not userId');
    const findUser: Nullable<IUserModel> = await this.users.findOne({ email: userData.email });
    if (findUser) throw new HttpException(400, 'User already exists');

    const createUserData: IUserModel = (await this.users.create({ ...userData })) as unknown as IUserModel;

    return createUserData;
  }
}

export default UserService;
