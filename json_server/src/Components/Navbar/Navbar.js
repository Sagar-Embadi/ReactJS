import "./Navbar.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { NavLink } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "../Home/Home";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

export function Navbar1() {
    return (
        <>
            <Navbar style={{padding: "20px 100px"}} bg='dark' expand="md" className='navbar'>
                <NavLink to="/" style={{color:"white",textDecoration:"none",fontSize:35}}>Delicious Recipes</NavLink>
                <Navbar.Toggle style={{backgroundColor:"grey"}}></Navbar.Toggle>
                <Navbar.Collapse className='collapse'>
                    <Nav style={{ gap: 30,}}>
                        <NavLink to="/home" element={<Home/>} style={{textDecoration:"none",color:"white",fontSize:20}}>Home</NavLink>
                        <NavLink to="/about" style={{textDecoration:"none",color:"white",fontSize:20}}>About</NavLink>
                        <NavLink to="/contact" style={{textDecoration:"none",color:"white",fontSize:20}}>Contact</NavLink>
                        <NavLink to="/recipes" style={{textDecoration:"none",color:"white",fontSize:20}}>Recipes</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse>
                    <Nav style={{gap:20,justifyContent:"flex-end"}} className="navBtns">
                        <button><NavLink to="/login" style={{textDecoration:"none",color:"black",fontSize:16}}>Log In</NavLink></button>
                        <button><NavLink to="/signup" style={{textDecoration:"none",color:"black",fontSize:16}}>Sign In</NavLink></button>
                        <NavLink to="/cart" style={{textDecoration:"none",color:"white",fontSize:25}}><FaCartShopping/></NavLink>
                        <NavLink to="/user" style={{textDecoration:"none",color:"white",fontSize:25}}><FaUserCircle/></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}