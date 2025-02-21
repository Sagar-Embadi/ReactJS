import React, { useState } from "react";
import { FaRegMoon ,FaSun} from "react-icons/fa";
import { Login } from "./Components/Loginfrom/Login";
import "./App.css";
const App = () => {
  const [show, setShow] = useState(false);
  const [loginShow,setLoginShow]=useState(false)
  function handleSignUp() {
    setShow(!show);
  }
  const [theme,setTheme]=useState(false)
  const themeChanger=()=>{
    setTheme(!theme) 
  }
  const themes={
    bgColor: theme ? "black":"lightblue",
    clr:theme? "white":"black",
    nav:theme? "grey" :"burlywood"
  }
  return (
    <div style={{backgroundColor:themes.bgColor,height:"100vh",width:"100%",color:themes.clr}}>
      <div id="navbar" style={{backgroundColor:themes.nav}}>
        <h1>NATURE WEB</h1>
        <div id="nav-right">
          <button onClick={handleSignUp}>Signup</button>
          <button  onClick={()=>setLoginShow(!loginShow)}>Login</button>
        <p onClick={themeChanger}> {theme ? <FaSun /> :<FaRegMoon />}</p>
        </div>
      </div>
      {show && <Login/>}
     {loginShow &&  <Login/>}
     <div style={{display:"flex",gap:"30px",alignItems:"center",marginTop:"50px", padding:"50px"}}>
        <p>Flowers are nature’s beautiful creations, playing a vital role in plant reproduction and the ecosystem. They come in a variety of colors, shapes, and sizes, attracting pollinators like bees, butterflies, and birds through their vibrant petals and sweet fragrances. Some flowers bloom seasonally, while others thrive year-round, adapting to different climates and environments. Beyond their biological function, flowers hold deep cultural and symbolic meanings, representing love, purity, joy, and remembrance in various traditions. They are also used in medicine, perfumes, and decorations, adding beauty and fragrance to human life. Additionally, flowers support biodiversity by providing nectar and pollen for insects, contributing to environmental balance. Their presence not only enhances natural landscapes but also brings a sense of peace and joy to those who admire them.</p>
        <img src="http://www.pixelstalk.net/wp-content/uploads/2016/03/Beautiful-Nature-wallpaper-background-free.jpg" alt="" width={600}/>
      </div>
    </div>
  );
};

export default App;

