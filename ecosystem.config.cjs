module.exports = {
  apps: [
    {
      name: "SumsubEuServiceAPI",
      namespace: "sumsub-eu-server",
      script: "./src/index.js",
      watch: ["./src", "./src/*.js"],
      output: "./logs/out.log",
      error: "./logs/error.log",
    },
  ],
};
