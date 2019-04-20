import express from "express";
import { join } from "path";
import Render from "../util/Render";

const router = express.Router();

router.get("/about-the-site", function (req, res, next) {
    res.render(join(__dirname, "..", "..", "assets/front-end/about-the-site"), Render);
});

export default router;