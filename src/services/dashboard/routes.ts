import { Router } from "express";
import { uploadJsonData } from "./controllers/post.js";

const dashboard=Router();

dashboard.route("/upload").post(uploadJsonData)


export default dashboard;