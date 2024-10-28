import "../styles/HomePage.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page" style={{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h1>Welcome to Next.js Application | Home Page</h1>
      <Link href={"/about"}><h3>About Us Page</h3></Link>
    </div>
  );
}
