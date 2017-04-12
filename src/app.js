require('babel-register');
import * as logger from "./utils/logger";

if (process.env["SAMPLE_APP_LONG_STACK_TRACES"] === "true") {
  global.Promise = require("bluebird");
}

logger.init()
    .then(
        () => {
          process.on('unhandledRejection', function (err) {
            logger.error({unhandled: err, stack: err.stack});
          });
          process.on('uncaughtException', function (err) {
            logger.error({unhandled: err, stack: err.stack});
          });

          const sampleApp = require("./sample-app").default;
          const port = process.argv.length >= 3 ? process.argv[2] : 8086;
          sampleApp({ port });
        }
    );
