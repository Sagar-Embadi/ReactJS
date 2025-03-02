import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar1 } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Products } from "./Components/Products/Products";
import { Login,Signup } from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
    <Navbar1/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/recipes" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;