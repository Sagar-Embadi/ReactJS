import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoCartSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
export function Navbar1 (){
    return(
        <Navbar bg="dark" data-bs-theme="dark" >
        <Container style={{padding:"10px 30px"}}>
          <Navbar.Brand style={{font:"30px bold",color:"white"}}href="/">OUR MART</Navbar.Brand>
          <Nav >
            <Nav.Link style={{font:"25px bold",color:"white"}} href="/">Home</Nav.Link>
            <Nav.Link style={{font:"25px bold",color:"white"}} href="/products">Products</Nav.Link>
            <Nav.Link style={{font:"25px bold",color:"white"}} href="/cart"><IoCartSharp/></Nav.Link>
            <Nav.Link style={{font:"25px bold", color:"red"}} href="/favorites"><FaHeart/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}