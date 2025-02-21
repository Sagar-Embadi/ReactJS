import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export function Navbar1(){
    return(
        <>
        <Navbar bg='dark' expand="md" className='navbar' style={{padding:"20px 80px"}}>
          <Navbar.Brand style={{color:"white"}}>SHOPPING</Navbar.Brand>
          <Navbar.Toggle style={{backgroundColor:"white"}}></Navbar.Toggle>
          <Navbar.Collapse className='collapse'>
                <Nav style={{ gap: 20}}>
                    <Nav.Link style={{color:"white"}}>Home</Nav.Link>
                    <Nav.Link style={{color:"white"}}>Product</Nav.Link>
                    <Nav.Link style={{color:"white"}}>About</Nav.Link>
                    <Nav.Link style={{color:"white"}}>Contact Us</Nav.Link>
                    <Button variant='success'>Login</Button>
                    <Button variant='success'>Sign Up</Button>
                </Nav>
          </Navbar.Collapse>
        </Navbar>
        </>
    )
}