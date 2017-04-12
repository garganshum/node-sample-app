import winston from "winston";
import config from "../config";
import util from "util";
require('winston-logstash');

let logger;

export async function init() {
  logger = new (winston.Logger)({
    transports: [
      new (winston.transports.File)({
        filename: "errors.log",
        json: true,
        humanReadableUnhandledException: true
      }),
      new (winston.transports.Logstash)({
        port: config.logstash.port,
        host: config.logstash.host
      }).on('error', function (err) {}),
      new (winston.transports.Console)({
        level: "error"
      })
    ]
  });
}


function logLevel(current) {
  const levels = [
    "NONE",
    "ERROR",
    "WARN",
    "INFO",
    "VERBOSE",
    "SILLY",
    "ALL",
  ];
  return (
      levels.indexOf(config.logLevel) >= levels.indexOf(current.toUpperCase())
  );
}

export function inspect(obj) {
  console.log("INSPECT:", util.inspect(obj, {depth: null, colors: true}));
}

export function error(msg) {
  if (config.debugging && config.debugging.errors) {
    inspect(msg);
  }
  if (logLevel("ERROR")) {
    logger.error(msg);
  }
}

export function warn(msg) {
  if (logLevel("WARN")) {
    logger.warn(msg);
  }
}

export function info(msg) {
  if (logLevel("INFO")) {
    logger.info(msg);
  }
}

export function verbose(msg) {
  if (logLevel("VERBOSE")) {
    logger.verbose(msg);
  }
}

export function silly(msg) {
  if (logLevel("SILLY")) {
    logger.silly(msg);
  }
}

