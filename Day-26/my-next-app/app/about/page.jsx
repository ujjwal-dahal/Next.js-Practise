"use client"
import { useRouter } from "next/navigation";
import MyComponent from "../components/MyComponent";


export default function About(){
  console.log("This is Server Component");

  let router = useRouter();

  let nagivateHandler = ()=>{
    router.push("/contact")
  }
  

  return <>
    <MyComponent />
    <h1>This is About Us Page</h1>
    <button onClick={nagivateHandler}>Navigate to Contact Us Page</button>
  </>
}