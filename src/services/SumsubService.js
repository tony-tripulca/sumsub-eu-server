import axios from "axios";
import URL from "../config/url.js";
import { createSignature, toQueryString } from "../util/Hash.js";

const TOKEN = process.env.SUMSUB_TOKEN_AU;
const SECRET_KEY = process.env.SUMSUB_SECRET_KEY_AU;

const SumsubService = {
  getAccessToken: (payload) => {
    let data = {
      endpoint: "/resources/accessTokens",
      method: "POST",
      timestamp: Math.floor(Date.now() / 1000),
    };

    let signature = createSignature(
      SECRET_KEY,
      `${data.timestamp}${data.method}${data.endpoint}?${toQueryString(
        payload
      )}`
    );

    return axios({
      method: "POST",
      baseURL: URL.sumsub(),
      url: `${data.endpoint}?${toQueryString(payload)}`,
      headers: {
        "X-App-Token": TOKEN,
        "X-App-Access-Sig": signature,
        "X-App-Access-Ts": data.timestamp,
        "Content-Type": "application/json",
      },
    });
  },
};

export default SumsubService;
