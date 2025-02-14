import "./Navbar.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button"
import React from 'react'
import { CiShoppingCart } from "react-icons/ci"
import Badge from 'react-bootstrap/Badge';

export function Navbar1() {
    return (
        <>
            <Navbar bg='dark' expand="md" className='navbar'>
                <Navbar.Brand style={{color:"white"}}>AMAZON</Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse className='collapse'>
                    <Nav style={{ gap: 20}}>
                        <Nav.Link style={{color:"white"}}>Home</Nav.Link>
                        <Nav.Link style={{color:"white"}}>Contact</Nav.Link>
                        <Button variant='success'>Login</Button>
                        <Button variant='danger'>
                            <CiShoppingCart size={20} ></CiShoppingCart>
                            <Badge style={{ top: -10 }}>10</Badge>

                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}