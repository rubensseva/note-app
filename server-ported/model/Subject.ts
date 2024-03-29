import mongoose from "mongoose";
import mongooseHistory from "mongoose-history";

const Schema = mongoose.Schema;


interface ISubject extends mongoose.Document {
  name: string,
  owner: mongoose.Types.ObjectId
}

const Subject = new Schema(
  {
    name: {
      type: String,
      required: true 
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
      required: true 
    },
  }
);

Subject.plugin(mongooseHistory);


export default mongoose.model<ISubject>("subject", Subject);
