const mongoose = require("mongoose");

const post = new mongoose.Schema({
  restaurant: {type: String, required: true},
  product: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  image: {type: String},
  rating: {type: Number}
});


const Post = mongoose.model("Post", post);

module.exports = {
  Post
}

// export default mongoose.model("Post", Post);