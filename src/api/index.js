import * as domain from "../domain";

export async function hello(ctx, name){
  ctx.body = await domain.hello(name);
}
