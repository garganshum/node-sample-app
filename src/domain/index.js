import SampleAppError from "../utils/error"

export async function hello(name){
  if (/^[A-z]+$/.test(name)){
    return { message: `Hello ${name}` };
  }
  else{
    throw new SampleAppError(
        "DOMAIN:INDEX:hello:Name must only be characters",
        arguments,
        "Name must only be characters",
        422
    )
  }
}