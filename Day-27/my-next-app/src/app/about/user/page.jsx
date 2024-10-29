"use client"

import { useRouter } from "next/navigation";

const User = ()=>{
  let router = useRouter();
  const handleRouting = (routerName)=>{
    router.push(routerName)

  }
  return <>
    <div className=""
    style={{
      display:"flex",
      flexDirection : "column",
      gap:"10px",
      justifyContent : "center",
      alignItems : "center",
      height:"100vh",
      width:"100vw"
    }}
    >
    <h1>This is Nested Routing</h1>
    <button onClick={()=> handleRouting("/about")}
    style={{
      height:"3rem",
      width:"20rem",
      fontSize:"19px",
      border:"0px",
      backgroundColor:"blue",
      color:"white",
      borderRadius :"10px",
      cursor :"pointer"
    }}
    >Move to About Us Page</button>
    </div>
  </>
}

export default User;