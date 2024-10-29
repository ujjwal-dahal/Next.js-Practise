


export default function ServiceLayout({children}){

  return <>
    <div className="" 
    style={{
      display:"flex",
      alignItems : "center",
      justifyContent : "center",
      flexDirection :"column",
      height:"100vh",
      width:"100vw",
      gap:"10px",
    }}
    >
    <h2 
    style={{
      color:"yellow"
    }}
    >This is Header</h2>
    {children}
    <h2 
    style={{
      color:"yellow"
    }}
    >This is Footer</h2>
    </div>
  </>
}