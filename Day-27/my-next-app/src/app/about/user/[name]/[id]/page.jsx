

import React from 'react'

const page = ({params}) => {
  let {id} = params;
  return (
    <h1>{id}</h1>
  )
}

export default page