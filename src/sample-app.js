import koa from "koa";
import router from "koa-route";
import * as api from "./api"
import appLogging from "./middleware/app-logging"
import config from "./config";

console.log(JSON.stringify(config, null, 2));

const app = new koa();

//middlewares
app.use(appLogging)
//routes
app.use(router.get("/hello/:name", api.hello));

export default function(options = {}) {
    const { port } = options;
    return (port) ? app.listen(port) : app.listen();
}
