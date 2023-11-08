class URL {
  static sumsub() {
    let env = process.env.APP_ENV;

    if (env === "dev") {
      return "https://api.sumsub.com";
    } else if (env === "uat") {
      return "/";
    } else if (env === "prod") {
      return "/";
    }

    return "/";
  }
}

export default URL;
