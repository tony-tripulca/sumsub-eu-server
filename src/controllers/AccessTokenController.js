import SumsubService from "../services/SumsubService.js";
import Logger from "../util/Logger.js";

const AccessToken = {
  generate: (req, res) => {
    SumsubService.getAccessToken({
      userId: `user-${Math.floor(Math.random() * 1001)}`,
      levelName: "KYC-EU",
    })
      .then((response) => {
        Logger.out([response.data]);
        res.send(response.data);
      })
      .catch((error) => {
        Logger.error([error]);
        res.send(error);
      });
  },
};

export default AccessToken;
