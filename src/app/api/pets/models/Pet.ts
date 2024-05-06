import mongoose from "mongoose";

export interface Pets extends mongoose.Document {
  avatar: string;
  name: string;
  ownerId: string;
  serviceId: string;
  roomId: string;
  checkInAt: string;
  checkOutAt: string;
}

const PetSchema = new mongoose.Schema<Pets>({
  avatar: { type: String, required: false },
  name: { type: String, required: true },
  ownerId: { type: String, required: true },
  serviceId: { type: String, required: true },
  roomId: { type: String, required: false },
  checkInAt: { type: String, required: true },
  checkOutAt: { type: String, required: false },
});

export default mongoose.models.Pet || mongoose.model<Pets>("Pet", PetSchema);
