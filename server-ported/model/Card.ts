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
      type: String
    },
    question: {
      type: String
    },
    answer: {
      type: String
      
    },
    topic: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'topic'
    }
  },
);

Card.plugin(mongooseHistory);

export default mongoose.model<ICard>("card", Card)
