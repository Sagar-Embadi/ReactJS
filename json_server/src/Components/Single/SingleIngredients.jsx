import React from 'react'


import { useOutletContext } from "react-router-dom";


const SingleIngredients = () => {
    const product=useOutletContext()
    console.log(product)
  return (
    <div>{product.ingredients.map(x=>{
        return(
            <div>{x}</div>
        )
    })}</div>
  )
}


export default SingleIngredients
