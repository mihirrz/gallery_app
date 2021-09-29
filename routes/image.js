import express from "express";
import { postImage, showImage } from "../controllers/image.js";

const routes = express.Router();

routes.post("/post", postImage);
routes.get('/',showImage)

export default routes;
