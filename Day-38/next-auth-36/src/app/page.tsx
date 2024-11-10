import { auth } from "@/auth"


export default async function Home(){

  const session = await auth();
  // console.log("Home --> Session ",session)
  console.log("Home --> Session ",session?.user?.name , session?.user?.email)

  return <>
  <h1
  style={{
    color:"red",
    textTransform:"uppercase"
  }}
  >Hello {session?.user?.name} </h1>
  <h2>This is Home Page</h2>
  </>
}