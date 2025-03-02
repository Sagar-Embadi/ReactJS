import React from 'react'


import { useOutletContext } from "react-router-dom";


const SingleInstructions = () => {
  const product=useOutletContext()
    console.log(product)
  return (
    <div>{product.instructions.map(x=>{
        return(
            <div>{x}</div>
        )
    })}</div>
  )
}


export default SingleInstructions
