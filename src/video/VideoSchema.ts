import mongoose, {Schema} from 'mongoose';

type IVideo = {
  title: string;
  description: string;
  category: string;
}

const VideoSchema = new Schema({
  title: String,
  description: String,
  category: String,
});

export default mongoose.model<IVideo>("VideoSchema", VideoSchema);