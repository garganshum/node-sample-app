export default class SampleAppError extends Error {
  constructor(devMessage, args, userMessage, status) {
    super(devMessage);
    this.name = this.constructor.name;
    this.devMessage = devMessage;
    this.args = args;
    this.userMessage = userMessage;
    this.status = status;
    this.stack = new Error().stack;
  }
}
