"use client"

import { useState } from "react"
import { redirect } from "next/navigation"

export default function Page(){


  const [logOut , setLogOut] = useState(false)
  if(logOut){
    redirect("/logout")
  }

  return <>
    <h1>About Page</h1>
    <button  onClick={()=>setLogOut(true)} >Logout</button>
  </>
}
