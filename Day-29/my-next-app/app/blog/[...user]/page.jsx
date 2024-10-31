

export default function BlogUser({params}){

  let {user} = params;

  return <>
  <h1
  style={{
    color:"gray",
    marginBottom:"10px"
  }}
  >This is Catching All Segments in Next.js</h1>

<h2
style={{
  color:"yellow",
  textTransform:"uppercase"
}}
>
  User Name : {
    user[0]
  }
</h2>
<h2
style={{
  color:"lightgreen"
}}
>
  User : {
    user[1]
  }
</h2>
<h2
style={
  {
    color:"red"
  }
}
>
  User Address : {
    user[2]
  }
</h2>

  </>
}