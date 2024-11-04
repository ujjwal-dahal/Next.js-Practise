import fetchingData from "../../../../public/js/fetchingData"

export default async function UserId({params}){

  let {userId}= params;
  userId = parseInt(userId);

  let data = await fetchingData();

  let getData = data.filter((user)=>{
    return (
      user.id === userId
    )
  })

  return <>

  {
    getData.map((user)=>{
      return (
        <div key={user.id}><h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <h3>{user.address.street}</h3></div>
      )
    })
  }

  </>
}