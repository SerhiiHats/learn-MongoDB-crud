import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {

  async create(req, res) {
    try {
      // const {restaurant, product, description, image, price, rating} = req.body;
      // const post = await Post.create({restaurant, product, description, image, price, rating});
      // console.log(req.files);
      const post = await PostService.create(req.body, req.files.image);
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll()
      res.status(200).json(posts);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }

  }

  async delete(req, res) {
    try {
      const updatedPost = await PostService.delete(req.params.id);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

}


export default new PostController();