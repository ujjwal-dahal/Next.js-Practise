import Link from "next/link"

export default function Home(){


  return <>
    <div className=""
    style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      width:"100vw",
      height:"100vh"
    }}
    >
    <h1>This is Home Page</h1>
    <h2
    style={{
      textDecoration:"underline",
      color:"red",
      margin:"5px 0 10px 10px "
    }}
    ><Link href={"/productlist"}>Product List</Link></h2>
    <h2
    style={{
      textDecoration:"underline",
      color:"red",
      margin:"5px 0 10px 10px "
    }}
    ><Link href={"/quotes"}>Quotes</Link></h2>
    </div>
  </>
}