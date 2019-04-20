import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { join } from "path";

const app: express.Application = express();

import vhost from "./util/vhost";
import Home from "./routes/Home";
import AboutTheSite from "./routes/About-The-Site";
import Any from "./routes/Any";
import Legacy from "./routes/Legacy"

app.set("view engine", "hbs");
app.set("views", "../../assets/front-end");

app.use(vhost("legacy.axelgreavette.xyz", Legacy));

app.use("/assets", express.static(join(__dirname, "..", "assets")));

app.use(Home, AboutTheSite, Any);

app.listen(process.env.PORT || 8081, function() {
    console.log(`Site is up and running on ${process.env.PORT || 8081}`)
})
