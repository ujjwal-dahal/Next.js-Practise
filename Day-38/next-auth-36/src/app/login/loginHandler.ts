"use server";

// loginHandler.ts
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

export const loginHandler = async (formData: FormData) => {
  const email = formData.get("email") as string 
  const password = formData.get("password") as string 

  try {
    //signIn method auth file dekhi aayo
    // Attempt to sign in with credentials
    //signIn function ma 1st parameter chai Kun Provider ho tesko name ani arko chai Fields haru ani redirect garne ki nagarne

    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      redirectTo: "/", // Specify the redirect path after successful login
    });
  } catch (error) {
    const err = error as Error;
    return err.message; // Handle error message display if needed
  }
};
