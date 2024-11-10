import { auth } from "@/auth";
import "./Login.scss";
import { LoginForm } from "./client/loginForm";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth();

  if(session?.user){
    redirect("/")
  }
  return (
    <>
      <LoginForm />
    </>
  );
}
