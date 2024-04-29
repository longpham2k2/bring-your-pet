import mongoose from "mongoose";

export interface Articles extends mongoose.Document {
  image: {
    src: string;
    srcSet: string | null;
  };
  categoryId: string;
  title: string;
  excerpt: string;
  content: string;
}

const ArticleSchema = new mongoose.Schema<Articles>({
  image: {
    src: {type: String, required: true},
    srcSet: {type: String, required: false},
  },
  categoryId: {type: String, required: true},
  title: {type: String, required: true},
  excerpt: {type: String, required: true},
  content: {type: String, required: true},
});

export default mongoose.models.Article || mongoose.model<Articles>("Article", ArticleSchema);
