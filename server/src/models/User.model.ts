import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { timestamps: true } })
class User {
  @prop({ type: String, required: true, trim: true })
  public name!: string;
  @prop({ type: String, required: true, unique: true })
  public email!: string;
  @prop({ type: String, required: true })
  public password!: string;
}
const UserModel = getModelForClass(User);

export default UserModel;
