import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
import {descriptionAPI} from "./config.js";

const PORT = 5000;

const DB_URL = `mongodb+srv://gatsserv:${process.env.MONGO_KEY}@cluster0.lvxi09z.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());                     //подключение использования JSON файлов
app.use(express.static("static"));      //подключение отдачи статических файлов с директории "static"
app.use(fileUpload({}));              //подключение express-fileupload для работы с файлами, их загрузкой
app.use("/api", router);                     //localhost:5000/api/posts
app.use("/", (req, res)=> res.send('Use API: ' + descriptionAPI));                     //localhost:5000/api/posts


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