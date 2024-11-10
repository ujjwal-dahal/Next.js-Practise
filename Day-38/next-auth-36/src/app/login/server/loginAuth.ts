import { auth } from "@/auth";
import { redirect } from "next/navigation";


export async function LoginAuth(){

  let session = await auth();
  if(session?.user){
    redirect("/")
  }
}