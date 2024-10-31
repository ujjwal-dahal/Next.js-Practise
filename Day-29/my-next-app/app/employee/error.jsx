"use client"

export default function EmployeeError({error}){

  return <>
    <h4
    style={{
      color:"yellow"
    }}
    >
      {error.message}
    </h4>
  </>
}