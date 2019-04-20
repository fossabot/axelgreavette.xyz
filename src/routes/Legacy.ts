import express from "express";
import { join } from "path";

const router = express.Router();

router.use("/", express.static(join(__dirname, "..", "..", "assets/legacy")));

export default router;