import mongoose from "mongoose";

export interface Rooms extends mongoose.Document {
  name: string;
}

const RoomSchema = new mongoose.Schema<Rooms>({
  name: { type: String, required: true },
});

export default mongoose.models.Room ||
  mongoose.model<Rooms>("Room", RoomSchema);
