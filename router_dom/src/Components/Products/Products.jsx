import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function Products(){
    let [recipe, setRecipe]=useState([])
    let [single,setSingle] = useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes").then(res=>res.json()).then(res=>{
        console.log(res.recipes)
        setRecipe(res.recipes)
    }).catch(err=>console.error(err))
    },[])

    // console.log(recipe,"cc");
    console.log(single);
    
    return(
        <div style={{display:"flex",gap:"40px", flexWrap:"wrap",marginTop:"30px",padding:"0px 50px"}} className="cardContainer">
            {recipe.map(x=>{
                return(
                    <Card onClick={()=>{
                        setSingle(x)
                    }} style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={x.image} />
                    <Card.Body>
                        <Card.Title>{x.name}</Card.Title>
                        <Card.Text>
                        Rating: {x.rating} Review{x.reviewCount}
                        </Card.Text>
                        <Button onClick={()=>{
                            setSingle(x)
                        }} variant="primary">View Recipe</Button>
                    </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}