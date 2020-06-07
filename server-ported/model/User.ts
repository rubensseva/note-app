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
      type: String,
      unique: true,
      required: true 
    },
    password: {
      type: String,
      required: true 
    },
    email: {
      type: String,
    }
  }
);

User.plugin(mongooseHistory);
User.plugin(uniqueValidator);

export default mongoose.model<IUser>("user", User);
