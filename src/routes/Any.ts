import express from "express";
import { join } from "path";
import Render from "../util/Render";

const router = express.Router();

router.get("*", function (req, res, next) {
    res.status(404).render(join(__dirname, "..", "..", "assets/front-end", "404.hbs"), Render);
});

export default router;