import 'dotenv/config';
import express, {json} from "express";
import mongoose from "mongoose";
import Post from "./Post.js";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;

const DB_URL = `mongodb+srv://gatsserv:${process.env.MONGO_KEY}@cluster0.lvxi09z.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());                     //подключение использования JSON файлов
app.use(express.static("static"));      //подключение отдачи статических файлов с директории "static"
app.use(fileUpload({}));              //подключение express-fileupload для работы с файлами, их загрузкой
app.use("/api", router);                     //localhost:5000/api/posts

//GET REQUEST -----------------------
// app.get('/', (reg, res) => {
//   console.log(reg.query);
//   console.log(reg.query.id)
//
//   res.status(200).json("Server OK worked123");
//   res.status(200).json({"id": 125, "firstName": "Serhii", "lastName": "Hats"});
// });

//POST REQUEST -----------------------
// app.post('/', async (reg, res) => {
//   try {
//     const {restaurant, product, description, image, price, rating} = reg.body;
//     const post = await Post.create({restaurant, product, description, image, price, rating});
//     console.log(reg.body);
//     res.status(200).json(post);
//   }catch (e){
//     res.status(500).json(e);
//     console.log(e);
//   }
// });

async function startApp() {
  try {
    if (!process.env.MONGO_KEY) {
      throw new Error("You forgot to set MONGO_DB_PASSWORD");
    }
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT: " + PORT));
  } catch (e) {
    console.log(e)
  }
}

startApp();