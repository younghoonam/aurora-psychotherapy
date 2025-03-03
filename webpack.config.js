const { default: DevServer } = require("next/dist/server/dev/next-dev-server");

module.exports = {
  DevServer: {
    host: "0.0.0.0", //your ip address
    port: 8080,
    disableHostCheck: true,
  },
};
