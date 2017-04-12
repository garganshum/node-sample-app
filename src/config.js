export const SAMPLE_APP_LOGGING = process.env["SAMPLE_APP_LOGGING"] || "all";
export const SAMPLE_APP_DEBUG_SQL = process.env["SAMPLE_APP_DEBUG_SQL"] === "true" || false;
export const SAMPLE_APP_DEBUG_ERRORS = process.env["SAMPLE_APP_DEBUG_ERRORS"] === "true" || false;

export const SAMPLE_APP_LOGSTASH_HOST = process.env["SAMPLE_APP_LOGSTASH_HOST"] || "127.0.0.1";
export const SAMPLE_APP_LOGSTASH_PORT = process.env["SAMPLE_APP_LOGSTASH_PORT"] || "5002";

const debugging = {
  sql: SAMPLE_APP_DEBUG_SQL || false,
  errors: SAMPLE_APP_DEBUG_ERRORS || false
};

export default {
  debugging,
  logLevel: SAMPLE_APP_LOGGING.toUpperCase(),
  logstash: {
    host: SAMPLE_APP_LOGSTASH_HOST,
    port: SAMPLE_APP_LOGSTASH_PORT
  }
};
