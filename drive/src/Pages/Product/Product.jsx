import axios from "axios"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Product(){
    const[data,setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/products").then(res=>{
            console.log(res.data)
            setData(res.data)
        }).catch(err=>console.error(err))
    },[])
    let handleCart = (x)=>{
        axios.post('http://localhost:5000/cart',x).then(
            res=>alert("Item Added to Cart")
        ).catch(err=>console.error(err))
    }
    let handleFav = (x)=>{
        axios.post('http://localhost:5000/favorites',x).then(
            res=>alert("Item Added to Favorites")
        ).catch(err=>console.error(err))
    }
    let handleFilter = (cat=null)=>{
        if(cat){
            axios.get(`http://localhost:5000/products?category=${cat}`).then(res=>{
                console.log(res.data)
                setData(res.data)
            })
        }
    }
    
    return(
        <div style={{display:'flex'}}>
        <div style={{width:"300px", display:"flex",flexDirection:'column',gap:20, alignContent:'center',padding:30,position:'fixed'}}>
            <Button onClick={()=>handleFilter("men's clothing")}> Mens Clothing</Button>
            <Button onClick={()=>handleFilter("women's clothing")}> Womens Clothing</Button>
            <Button onClick={()=>handleFilter("electronics")}> Electronics</Button>
            <Button onClick={()=>handleFilter("jewelery")}> Jewelery</Button>
        </div>
        <div style={{display:"flex",gap:20,flexWrap:'wrap',position:'absolute',left:'300px'}}>
            {data.map(x=>{
                return(
                    <Card style={{ width: '20rem',height:'35rem' }} key={x.id}>
                    <Card.Img style={{width:"100%",height:'60%'}} variant="top" src={x.image} />
                    <Card.Body>
                        <Card.Title>{x.title}</Card.Title>
                        <Card.Text>
                            <h4>Catogery: {x.category}</h4>
                        </Card.Text>
                        <div style={{display:'flex',gap:20}}>
                        <Button variant="primary" onClick={()=>handleCart(x)}>Add to cart</Button>
                        <Button variant="primary" onClick={()=>handleFav(x)}>Add to Favorites</Button>
                        </div>
                    </Card.Body>
                    </Card>
                )
            })}
        </div>
        </div>
    )
}