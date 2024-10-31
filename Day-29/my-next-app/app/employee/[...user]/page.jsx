"use client"

import { usePathname } from "next/navigation";
const EmployeeUser = ({params})=>{

  let path = usePathname();

  let {user} = params;

  return <>

  <h1 
  style={{
    textTransform:"uppercase",
    color:"red"
  }}
  >
    Employee Name : {user[0]}
    
  </h1>
  {
    path==="/employee/ujjwal/sunsari" && <h1 
  style={{
    textTransform:"uppercase",
    color:"red"
  }}
  >
    Employee Address : {user[1]}
    
  </h1>
  }

  </>
}

export default EmployeeUser;