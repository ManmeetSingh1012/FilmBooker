import mongoose, { Schema, Document } from "mongoose";

const premiummovieSchema = new Schema({
  mainposter: { type: String, required: true },
  backposter: { type: String, required: true },

  title: { type: String, required: true, index: true },
  aboutmovie: { type: String, required: true },
  language: { type: [String], required: true },
  releasedate: { type: String, required: true },
  rating: { type: Number, required: true },
  duration: { type: String, required: true },
  genre: { type: [String], required: true },
  crew: { type: [String], required: true },
  cast: { type: [String], required: true },
  likes: { type: Number, required: true },
  age: { type: String, required: true },
  comments: { type: [String], required: true },
});

export const PremiumMovie = mongoose.model("PremiumMovie", premiummovieSchema);
