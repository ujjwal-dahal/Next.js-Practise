import Link from "next/link"

export default function Employee(){

  return <>
  <h1
  style={{
    color:"red",
    marginBottom:"20px"
  }}
  >Employee Name :</h1>

  <h3 
  style={{
    color:"yellow",
    margin:"20px 0",
    textDecoration:"underline",
    textTransform:"uppercase"
  }}
  ><Link href={"/employee/ujjwal"} >Ujjwal</Link></h3>
 <h3 
 style={{
  color:"yellow",
  margin:"20px 0",
  textDecoration:"underline",
  textTransform:"uppercase"
 }}
 > <Link href={"/employee/hari"} >Hari</Link></h3>
 <h3 
 style={{
  color:"yellow",
  margin:"20px 0",
  textDecoration:"underline",
  textTransform:"uppercase"
 }}
 > <Link href={"/employee/ram"} >Ram</Link></h3>
    
  </>
}