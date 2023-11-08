import { app } from "./Server.js";
import AccessToken from "./controllers/AccessTokenController.js";
import WebhookController from "./controllers/WebhookController.js";

import Logger from "./util/Logger.js";

app.get("/", (req, res) => {
  res.json({ service: process.env.APP_NAME });
});

app.get("/access-token", AccessToken.generate);

app.post("/eu-receiver", WebhookController.receive);
