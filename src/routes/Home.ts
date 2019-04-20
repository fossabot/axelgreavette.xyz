import express from "express";
import { join } from "path";
import Render from "../util/Render";

const router = express.Router();

router.get("/", function (req, res, next) {
    res.render(join(__dirname, "..", "..", "assets/front-end"), Render);
});

router.use('/', express.static(join(__dirname, "..", "..", "assets/front-end")));

export default router;