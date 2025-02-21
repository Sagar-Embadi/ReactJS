import "./Products.css"
import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class Product extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            category: false
        }
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({ data: res, filter: res })
            })
            .catch(err => console.error(err))
    }

    handleFilter = (category) => {
        this.setState({ category: category });
    }

    applyFilter = () => {
        const { data, category } = this.state;
        if (!category) {
            return data; 
        }
        return data.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }

    render() {
        const filteredData = this.applyFilter(); 
        return (
            <div className="body">
                <div className="filter">
                    <h3>Categories</h3>
                    <button onClick={() => this.handleFilter("men's clothing")}>MENS</button>
                    <button onClick={() => this.handleFilter("women's clothing")}>WOMEN</button>
                    <button onClick={() => this.handleFilter('jewelery')}>Jewelry</button>
                    <button onClick={() => this.handleFilter('electronics')}>Electronics</button>
                </div>
                <div className="cardsContainer">
                    {filteredData.map((x, index) => {
                        return (
                            <Card key={index} style={{ width: '19rem',height:"26rem" }}>
                                <Card.Img variant="top" src={x.image} />
                                <Card.Body>
                                    <Card.Title>{x.title}</Card.Title>
                                    <Button variant="success">Add To Cart</Button>
                                    <Button variant="primary" style={{ marginLeft: "50px" }}>Buy Now</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </div>
        )
    }
}
