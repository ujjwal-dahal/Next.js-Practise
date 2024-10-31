

export default function page({params}){

  let {name} = params;

  if(name === "hari"){
    throw new Error("Sorry You Have Got Naming Error")
  }

  return <>

  <h3
  style={{
    color:"skyblue",
  }}
  >
    Your Name is : {name}
  </h3>

  </>
}