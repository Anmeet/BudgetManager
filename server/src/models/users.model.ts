import { IUserDoc, IUserModel } from '@/interfaces/users.interface';
import { Schema, model } from 'mongoose';

const userSchema = new Schema<IUserDoc, IUserModel>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const User = model<IUserDoc, IUserModel>('User', userSchema);

export default User;
