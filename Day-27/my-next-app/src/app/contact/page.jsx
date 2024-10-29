"use client"

import { useRouter } from "next/navigation";

const Contact = ()=>{

  let router = useRouter();

  let navigateHandler = (routerName)=>{
    router.push(routerName)
  }

  return <>
    <h3>This is Contact Page</h3>
    <button onClick={()=> navigateHandler("/")}>Home</button>
    <button onClick={()=>navigateHandler("/about")}>About</button>
  </>
}

export default Contact;