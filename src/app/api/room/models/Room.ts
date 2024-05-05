import mongoose from "mongoose";

export interface Rooms extends mongoose.Document {
  name: string;
  type: string;
  cameraId: string;
  isOccupied: boolean;
}

const RoomSchema = new mongoose.Schema<Rooms>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  cameraId: { type: String, required: true },
  isOccupied: { type: Boolean, required: true },
});

export default mongoose.models.Room ||
  mongoose.model<Rooms>("Room", RoomSchema);
