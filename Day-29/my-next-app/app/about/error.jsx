"use client"

const AboutError = ({error , reset})=>{

  return <>
    <h4 
    style={{
      color:"red",
      border:"2px solid red",
      padding:"10px",
    }}
    >Oops You Got an Error : {error.message}</h4>
    
  </>
}

export default AboutError;