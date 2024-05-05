import mongoose from "mongoose";

export interface Services extends mongoose.Document {
  name: string;
}

const ServiceSchema = new mongoose.Schema<Services>({
  name: { type: String, required: true },
});

export default mongoose.models.Service ||
  mongoose.model<Services>("Service", ServiceSchema);
