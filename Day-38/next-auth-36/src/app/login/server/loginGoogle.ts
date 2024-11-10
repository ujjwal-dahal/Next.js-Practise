"use server";

import { signIn } from "@/auth";

const LoginGoogle = async ()=>{

  await signIn("google");

}

export default LoginGoogle;