import axios from "axios"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Fav(){
    const[fav,setFav] = useState([])
    const[remove,setRemove] = useState(null)
    useEffect(()=>{
        axios.get("http://localhost:5000/favorites").then(res=>{
            console.log(res.data)
            setFav(res.data)
        }).catch(err=>console.error(err))
    },[remove])
    let handleCart = (x)=>{
        axios.post('http://localhost:5000/cart',x).then(
            res=>alert("Item Added to Cart")
        ).catch(err=>console.error(err))
    }
    let handleRemove = (x)=>{
        axios.delete(`http://localhost:5000/favorites/${x.id}`).then(res=>{
            alert("item Removed form Cart")
            setRemove(x)
        })
    }
    return(
        <div style={{textAlign:'center',padding:"30px"}}>
        { fav.length > 0?<div style={{display:"flex",gap:20,flexWrap:'wrap'}}>
            {fav.map(x=>{
                return(
                    <Card style={{ width: '20rem',height:'35rem' }} key={x.id}>
                    <Card.Img style={{width:"100%",height:'60%'}} variant="top" src={x.image} />
                    <Card.Body>
                        <Card.Title>{x.title}</Card.Title>
                        <Card.Text>
                            <h4>Catogery: {x.category}</h4>
                        </Card.Text>
                        <div style={{display:'flex',gap:20}}>
                        <Button variant="primary" onClick={()=>handleRemove(x)}>Remove</Button>
                        <Button variant="primary" onClick={()=>handleCart(x)}>Add to Cart</Button>
                        </div>
                    </Card.Body>
                    </Card>
                )
            })}
        </div> :<h1>NO ITEMS IN FAVORITES</h1>
        
        
        }
        
        </div>
    )
}