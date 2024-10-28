"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  // const navigateRouting = () => {
  //   router.push("/about");
  // };
  const navigateRouting = (RouterName) => {
    router.push(RouterName);
  };

  return (
    <>
    <div style={{display:"flex", flexDirection:"column" , justifyContent :"center", alignItems:"center" , width:"100vw" , height:"100vh" , gap:"20px"}}> 

        <h1>This is Contact Us Page</h1>
        <Link href={"/"}>
          <h3 style={{ color: "red", textDecoration: "underline" }}>Home Page</h3>
        </Link>
        {/* <button onClick={navigateRouting}>Navigate To About Page</button> */}
        <button onClick={()=>navigateRouting("/")}>Navigate To Home Page</button> 
        <button onClick={()=>navigateRouting("/about")}>Navigate To About Page</button> 

      </div>
    </>
  );
};

export default Contact;
