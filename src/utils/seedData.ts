import * as bcrypt from 'bcrypt';
import UserModel from '../models/UserModel';
import { envVariable } from '../config/configuration';

const seed = async () => {

  let user = await UserModel.countDocuments();
  let { name, email, password } = envVariable
  // Encrypt password
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt)
  if (user <= 0) {
    user = new UserModel({
      name,
      email,
      password,
    })
    await user.save();
  }

}

export default seed;