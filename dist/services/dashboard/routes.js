import { Router } from "express";
import { uploadJsonData } from "./controllers/post.js";
const dashboard = Router();
dashboard.route("/upload").get(uploadJsonData);
export default dashboard;
