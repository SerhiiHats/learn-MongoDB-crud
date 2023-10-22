const {Post} = require("./Post.js");
const FileService = require("./fileService.js");

class PostService {
  async create(post, picture) {
    const fileName = FileService.saveFile(picture);
    const createdPost = await Post.create({...post, image: fileName});
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Id не указан")
    }
    const post = await Post.findById(id);
    return post;
  }

  async update(post) {
    if (!post._id) {
      throw new Error("Id не указан")
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Id не указан")
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}


module.exports = {
  PostService
}

// export default new PostService();