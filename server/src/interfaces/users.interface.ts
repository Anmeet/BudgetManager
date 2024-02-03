import mongoose, { Model, Document } from 'mongoose';
export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface IUserDoc extends IUser, Document {}

export interface IUserModel extends Model<IUserDoc> {
  _id: mongoose.Types.ObjectId;
}
