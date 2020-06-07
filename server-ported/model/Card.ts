import mongoose from 'mongoose';
import mongooseHistory from 'mongoose-history';

const Schema = mongoose.Schema;


interface ICard extends mongoose.Document {
  name: string,
  question: string,
  answer: string,
  topic: mongoose.Types.ObjectId
}

const Card = new Schema(
  {
    name: {
      type: String,
      required: true 
    },
    question: {
      type: String,
      required: true 
    },
    answer: {
      type: String,
      required: true 
    },
    topic: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'topic',
      required: true 
    }
  },
);

Card.plugin(mongooseHistory);

export default mongoose.model<ICard>("card", Card)
