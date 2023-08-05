import mongoose from "mongoose";

const Post = new mongoose.Schema({
  restaurant: {type: String, required: true},
  product: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  image: {type: String},
  rating: {type: Number}
});

export default mongoose.model("Post", Post);