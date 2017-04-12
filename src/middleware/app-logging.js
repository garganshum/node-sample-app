/*
 Log requests and errors
 */
import * as logger from "../utils/logger";

export default async function(ctx, next) {
  let error;
  try {
    await next();
  } catch (_error) {
    error = _error;
    ctx.body = { message: _error.userMessage || "Something went wrong" };
    ctx.status = error.status || 500;
  }

  const logData = {
    method: ctx.method,
    url: ctx.url,
    path: ctx.path,
    query: ctx.request.query,
    status: ctx.status
  };
  if (error) {
    logData.error = error;
    logData.message = error.devMessage;
    logData.args = error.args;
    logData.stack = error.stack;
    logger.error(logData);
  } else {
    logger.info(logData);
  }
}
