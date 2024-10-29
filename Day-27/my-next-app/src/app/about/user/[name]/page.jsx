
export default function page({params}){

  let {name} = params;

  return <>
    <div className=""
    style={{
      display:"flex",
      flexDirection : "column",
      gap:"10px",
      justifyContent : "center",
      alignItems : "center",
      height:"100vh",
      width:"100vw"
    }}
    >

    <h1>This is Dynamic Routing</h1>
    <h2>User {name}</h2>

    </div>
  </>
}