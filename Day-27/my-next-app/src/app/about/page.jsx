import Link from "next/link";

const About = ()=>{
  return <>
    <h1>This is About Us Page</h1>
    <Link href={"/"}>Home</Link>
    <Link href={"/contact"}>Contact</Link>
  </>
}

export default About;