import mongoose from "mongoose";

export interface Pets extends mongoose.Document {
  avatar: string;
  name: string;
  ownerId: string;
  service: string;
  roomId: string;
  checkInAt: string;
  checkOutAt: string;
}

const PetSchema = new mongoose.Schema<Pets>({
  avatar: { type: String, required: true },
  name: { type: String, required: true },
  ownerId: { type: String, required: true },
  service: { type: String, required: true },
  roomId: { type: String, required: false },
  checkInAt: { type: String, required: true },
  checkOutAt: { type: String, required: false },
});

export default mongoose.models.Pet || mongoose.model<Pets>("Pet", PetSchema);
