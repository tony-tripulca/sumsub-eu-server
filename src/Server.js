import express from "express";
import Logger from "./util/Logger.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT;
const appName = process.env.APP_NAME;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  Logger.out([`${appName} is listening on port ${port}`]);
});

export { app };
