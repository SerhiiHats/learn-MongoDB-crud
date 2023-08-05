import {Router} from "express";
import PostController from "./PostController.js";

const router = new Router();

router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.put("/posts/", PostController.update);
router.delete("/posts/:id", PostController.delete);// router.post("/posts", async (reg, res)   => {
//   try {
//     const {restaurant, product, description, image, price, rating} = reg.body;
//     const post = await Post.create({restaurant, product, description, image, price, rating});
//     console.log(reg.body);
//     res.status(200).json(post);
//   }catch (e){
//     res.status(500).json(e);
//     console.log(e);
//   }
// }
// );
export default router;