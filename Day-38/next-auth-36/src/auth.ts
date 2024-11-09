// src folder bhitra "auth.ts" file banaune ani tesma below ko code haru lekhne
// src folder outside app folder

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"; // Credentials Provider
import Google from "next-auth/providers/google"; // Google Provider

import { CredentialsSignin } from "next-auth";
import { User } from "./models/userModel";
import { compare } from "bcryptjs"; // for comparing enteredPassword with hashedPassword

// NextAuth le Nikai Value haru return garcha jaslai hamile Object Destructuring garera export garchum
// That value are handlers, signIn, signOut, auth
export const { handlers, signIn, signOut, auth } = NextAuth({

  // NextAuth Bhannele Object As a parameter lincha ani Tesma providers property dine jasle Array as a value lincha
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email"
        },
        password: { label: "Password", type: "password" },
      },

      // async authorize(credentials){yaha chai user lai authorize garne . eddi user exist garcha database ma bhane return user garne nabhai return null garne}

      authorize: async (credentials) => {

        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin("Both Input Field is require !! ");
        }

        // Connection with Database here
        const user = await User.findOne({ email }).select("+password"); // email ko sath sathai password ni find garcha

        if (!user) throw new CredentialsSignin("Invalid Email or Password");

        if (!user.password) {
          throw new CredentialsSignin("You have signed in with other methods like GOOGLE !");
        } // If user le Google bata signin gareko cha bahne teti bela usko password hudaina

        const isMatch = await compare(password, user.password);

        if (!isMatch) {
          throw new CredentialsSignin("Invalid Email or Password !!");
        }

        // if(!user.isVerified){throw new CredentialsSignin("Please Verify Email to Signin")}

        // if(password!="ujjwal123"){
        //   throw new CredentialsSignin("Password is not matched")
        // }

        // else return user;

        return { name: user.name, email: user.email, id: user._id };
      }

      // authorize bhaesi session token generate garcha

    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],

  pages: {
    signIn : "/login",
  }

});
