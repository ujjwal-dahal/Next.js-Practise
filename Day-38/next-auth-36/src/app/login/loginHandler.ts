"use client";

// loginHandler.ts
import { signIn } from "next-auth/react";

export const loginHandler = async (email : string , password : string) => {

  try {
    //signIn method auth file dekhi aayo
    // Attempt to sign in with credentials
    //signIn function ma 1st parameter chai Kun Provider ho tesko name ani arko chai Fields haru ani redirect garne ki nagarne

    const result = await signIn("credentials", {
      email,
      password,
    });

    return null;
  } catch (error) {
    const err = error as Error;
    return err.message; // Handle error message display if needed
  }
};
