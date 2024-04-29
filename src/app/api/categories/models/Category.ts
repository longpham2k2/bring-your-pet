import mongoose from "mongoose";

export interface Categories extends mongoose.Document {
  name: string;
}

const CategorySchema = new mongoose.Schema<Categories>({
  name: { type: String, required: true },
});

export default mongoose.models.Category ||
  mongoose.model<Categories>("Category", CategorySchema);
