// loginHandler.ts
import { signIn } from "next-auth/react";

export const loginHandler = async (formData: FormData) => {
  const email = formData.get("email") as string | undefined;
  const password = formData.get("password") as string | undefined;

  // Validate if email and password are provided
  if (!email || !password) {
    throw new Error("Please provide Email and Password.");
  }

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

    // Optional handling for sign-in failure (if not using built-in error pages)
    if (!result?.ok) {
      throw new Error("Sign-in failed. Check your credentials.");
    }
  } catch (error) {
    const err = error as Error;
    return err.message; // Handle error message display if needed
  }
};
