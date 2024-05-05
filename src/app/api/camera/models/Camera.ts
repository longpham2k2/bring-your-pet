import mongoose from "mongoose";

export interface Cameras extends mongoose.Document {
  name: string;
  type: string;
  address: string;
}

const CameraSchema = new mongoose.Schema<Cameras>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  address: { type: String, required: true },
});

export default mongoose.models.Camera ||
  mongoose.model<Cameras>("Camera", CameraSchema);
