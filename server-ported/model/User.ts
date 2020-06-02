import mongoose from "mongoose";
import mongooseHistory from "mongoose-history";
import uniqueValidator from 'mongoose-unique-validator';


const Schema = mongoose.Schema;


interface IUser extends mongoose.Document {
  username: string,
  description: string,
  owner: mongoose.Types.ObjectId
}

const User = new Schema(
  {
    username: {
      type: String
    },
    password: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true
    }
  }
);

User.plugin(mongooseHistory);
User.plugin(uniqueValidator);

export default mongoose.model<IUser>("user", User);
