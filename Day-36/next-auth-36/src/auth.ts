//src folder bhitra "auth.ts" file banaune ani tesma below ko code haru lekhne
//src folder outside app folder


import NextAuth from "next-auth";


import Credentials from "next-auth/providers/credentials";//Credentials Provider
import Google from "next-auth/providers/google"; //Google Provider


//NextAuth le Nikai Value haru return garcha jaslai hamile Object Destructuring garera export garchum
//That value are handlers , signIn , signOut , auth


 export const {handlers , signIn , signOut ,auth}= NextAuth({

//NextAuth Bhannele Object As a parameter lincha ani Tesma providers property dine jasle Array as a value lincha

  providers : [
    
    Credentials({
      name : "Credentials",
      credentials : {
        email : {
          label : "Email",
          type : "email"
        },
        password : {label :"Password", type : "password"},
      },

      //async authorize(credentials){yaha chai user lai authorize garne . eddi user exist garcha database ma bhane return user garne nabhai return null garne}
    }),
    Google({
      clientId : process.env.GOOGLE_CLIENT_ID,
      clientSecret : process.env.GOOGLE_CLIENT_SECRET
    })
  ] 


})