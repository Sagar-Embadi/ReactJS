import "./Fetch.css"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class Fetch extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0,
            data:[]
        }
    }
    componentDidMount(){
       fetch("https://fakestoreapi.in/api/products")
       .then(res => res.json())
       .then(res=>{this.setState({data:res.products})})
       .catch(err=> console.error(err))
    }
    render(){  
        return(
            <div className="cardContainer">
            {this.state.data.map((x,index)=>{
                return(
                    <Card style={{ width: '19rem' }}>
                    <Card.Img variant="top" src={x.image} />
                    <Card.Body>
                      <Card.Title>{x.title}</Card.Title>
                      <Card.Text>
                        PRICE: {x.price}
                      </Card.Text>
                      <Button variant="primary">Buy Now</Button>
                    </Card.Body>
                  </Card>
                )
            }) }
            </div>
        )}}