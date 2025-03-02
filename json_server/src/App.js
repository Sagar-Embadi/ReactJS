import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react"
import { Navbar1 } from "./Components/Navbar/Navbar.js";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Products } from "./Components/Products/Products";
import SignUp from "./Components/Signup/Signup";
import Login from "./Components/Login/Login.jsx"
import { Single } from "./Components/Single/single";
import SingleIngredients from "./Components/Single/SingleIngredients";
import SingleInstructions from "./Components/Single/SingleInstructions";
import { Cart } from "./Components/Cart/Cart";
import axios from "axios"
import { User } from "./Components/User/User.jsx";
function App() {
  let [recipe, setRecipe]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/recipes").then(res=>{
        console.log(res.data)
        setRecipe(res.data)
      }).catch(err=>console.error(err))
    },[])
  return (
    <BrowserRouter>
    <Navbar1/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/recipes" element={<Products data={recipe}/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/recipes/:id" element={<Single data={recipe}/>} >
        <Route path="ingredients" element={<SingleIngredients />} />
        <Route path="instructions" element={<SingleInstructions/>} />
      </Route>
      <Route path="/cart" element={<Cart />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
