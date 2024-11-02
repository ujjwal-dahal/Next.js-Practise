"use client"

import { useState } from "react"
import "./page.scss"

const Button = ({author})=>{

  let [showAuthor , setShowAuthor] = useState(false)

  return <>
    {
      showAuthor ? <button onClick={()=>setShowAuthor(false)}>Hide Author</button> : <button onClick={()=>setShowAuthor(true)}>Show Author</button>
    }
    {
      showAuthor && <p>{author}</p>
    }
  </>
}

export default Button;