const {PostService} = require("./PostService.js");

const postService = new PostService();
class PostController {

  async create(req, res) {
    try {
      const post = await postService.create(req.body, req.files.image);
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await postService.getAll()
      res.status(200).json(posts);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getOne(req, res) {
    try {
      const post = await postService.getOne(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await postService.update(req.body);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }

  }

  async delete(req, res) {
    try {
      const updatedPost = await postService.delete(req.params.id);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

}


// export default new PostController();

module.exports = {
  PostController
}