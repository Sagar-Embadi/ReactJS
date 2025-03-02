/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import {Card,Button }from "react-bootstrap"
import axios from "axios"
export function Cart(){
    const [cart,setCart] = useState([])
    const [remove,setRemove] = useState("")
    useEffect(()=>{
        axios.get("http://localhost:4000/cart").then(res=>{
            console.log(res.data)
            setCart(res.data)
        })
        console.log(cart);   
    
    },[remove])
    let removeItem = (x)=>{
        axios.delete(`http://localhost:4000/cart/${x.id}/`)
        setRemove(x)
    }
    return(
        <div style={{display:"flex",gap:"40px", flexWrap:"wrap",marginTop:"30px",padding:"0px 50px"}}>
            
            {cart.map(x=>{
                return(
                    <Card  style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={x.image} />
                    <Card.Body>
                        <Card.Title>{x.name}</Card.Title>
                        <Card.Text>
                        Rating: {x.rating} Review{x.reviewCount}
                        </Card.Text>
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                        <Button variant="primary">Buy Now</Button>
                        <Button variant="secondary" onClick={()=>{removeItem(x)}}>Remove</Button>
                        </div>
                    </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}