import Link from "next/link";
import fetchingData from "../../../public/js/fetchingData"; 

const User = async ()=>{

  let data = await fetchingData();



  return <>

{
  data.map((user)=>{
    return (
      <div className="">
      <Link href={`user/${user.id}`} > {user.name} </Link>
      </div>
    )
  })
}

  </>
}


export default User;