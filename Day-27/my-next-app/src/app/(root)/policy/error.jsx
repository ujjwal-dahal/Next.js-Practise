"use client"


export default function Error({error , reset}){

  return <>
      <h1>Error : {error.message}</h1>
  </>
}