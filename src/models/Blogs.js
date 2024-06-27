import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Agents" },
    title: String,
    description: String,
    date: Date,
    minToRead: Number,
    location: String,
    amenities: String,
    utilities: String,
    links: Array,
    features: Array,
});
export const BlogModel = mongoose.model("Blogs", blogSchema);
