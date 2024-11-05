
import Link from "next/link"

export default function Home(){
  console.log(process.env.MYAPIKEY)

  return <>
    <h1>This is Home Page</h1>
    <Link href={"/about"} >About</Link>
  </>
}