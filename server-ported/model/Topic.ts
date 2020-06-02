import mongoose from "mongoose";
import mongooseHistory from "mongoose-history";

const Schema = mongoose.Schema;


interface ITopic extends mongoose.Document {
  name: string,
  description: string,
  owner: mongoose.Types.ObjectId
}

const Topic = new Schema(
  {
    name: {
      type: String
    },
    description: {
      type: String
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'user' 
    },
  }
);

Topic.plugin(mongooseHistory);

export default mongoose.model<ITopic>("topic", Topic);
