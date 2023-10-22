const Router = require("express");
const {PostController} = require("./PostController.js");

const postController = new PostController();
const router = new Router();

router.post("/posts", postController.create);
router.get("/posts", postController.getAll);
router.get("/posts/:id", postController.getOne);
router.put("/posts/", postController.update);
router.delete("/posts/:id", postController.delete);// router.post("/posts", async (reg, res)   => {

// export default router;

module.exports = {
  router
}