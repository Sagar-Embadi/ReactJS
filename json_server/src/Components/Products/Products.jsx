import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import {useNavigate} from "react-router-dom"
import axios from "axios"
// import { useEffect, useState } from 'react';

export function Products(data){
    console.log(data.data)
    let recipe = data.data
    // let navigate = useNavigate();
     let handleCart = (x)=>{
        axios.post("http://localhost:4000/cart",x)
     }
    
    return(
        <div style={{display:"flex",gap:"40px", flexWrap:"wrap",marginTop:"30px",padding:"0px 50px"}} className="cardContainer">
            {recipe.map(x=>{
                return(
                    <Card  style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={x.image} />
                    <Card.Body>
                        <Card.Title>{x.name}</Card.Title>
                        <Card.Text>
                        Rating: {x.rating} Review{x.reviewCount}
                        </Card.Text>
                        <Button onClick={()=> handleCart(x)} variant="primary">Add To Cart</Button>
                    </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}