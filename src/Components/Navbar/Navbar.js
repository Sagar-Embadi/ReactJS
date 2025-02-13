import "./Navbar.css"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export const Navbar1 = () => {
    return (
        <Navbar expand="md" className='navbar'> 
            <Navbar.Brand style={{fontSize:"30px",fontWeight:"700"}}>Candy UI</Navbar.Brand>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse className='collapse'>
                <Nav className="links">
                    <Nav.Link style={{color:"black"}}>Home</Nav.Link>
                    <Nav.Link style={{color:"black"}}>Services</Nav.Link>
                    <Nav.Link style={{color:"black"}}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      )
}