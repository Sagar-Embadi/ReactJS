/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
const Updating = () => {
  const [bgColor, setBgColor] = useState("");
  const [index, setIndex] = useState("0");
  let quote = ["The only way to do great work is to love what you do.",
                "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "Do what you can, with what you have, where you are.",
                "Believe you can and you're halfway there.",
                "Happiness depends upon ourselves.",
                "Act as if what you do makes a difference. It does.",
                "The best way to predict the future is to create it.",
                "Dream big and dare to fail." ,
                "It always seems impossible until it's done.",
                "Don't watch the clock; do what it does. Keep going."]
  let image = [ "https://th.bing.com/th/id/OIP.ZfRmUopygvSxsU81imsHtQHaFj?pid=ImgDet&w=184&h=138&c=7&dpr=1.5",
                "https://wallpapershigh.com/wp-content/uploads/what-is-success-2-1.webp",
                "https://th.bing.com/th/id/OIP.6jZMS_5GIVdWkZBayiWK5AHaFD?w=268&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                "https://i.ytimg.com/vi/lftNw6KXnN4/maxresdefault.jpg",
                "https://th.bing.com/th/id/OIP.eY9KQHpw-zXiPhoqFjpmagHaFt?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                "https://th.bing.com/th/id/OIP.ZfRmUopygvSxsU81imsHtQHaFj?pid=ImgDet&w=184&h=138&c=7&dpr=1.3",
                "https://wallpapershigh.com/wp-content/uploads/what-is-success-2-1.webp",
                "https://th.bing.com/th/id/OIP.6jZMS_5GIVdWkZBayiWK5AHaFD?w=268&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                "https://thestrive.co/wp-content/uploads/2022/11/quotes-about-success-and-achievement-1024x576.jpg",
                "https://th.bing.com/th/id/OIP.eY9KQHpw-zXiPhoqFjpmagHaFt?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",

  ]
  const sagar = ()=>{
    let color="#"
    let xyz="abcdef0123456789";
   
    for(let i=0;i<6;i++){
        let value=Math.floor(Math.random() * xyz.length);
        console.log(value)
        color += xyz[value]

    }
    setBgColor(color)
    let ind=Math.floor(Math.random() * quote.length);
    setIndex(ind)
  }
  useEffect(() => {
    sagar()
  },[]);

  return (
    <div style={{textAlign:"center",padding:"10px"}}>
        <h2>genatrate a random quote with random background color  by clicking on buttons <br/>the width of the screen will adjust according to the button</h2>
    <div style={{padding:"20px",height:"450px",borderRadius:"15px",border:"3px solid black",width:"450px",margin:"auto", backgroundColor: bgColor ,textAlign:"center"}}>
        <img style={{width:"100%", height:"60%",objectFit:"cover"}} src={image[index]} alt=""/>
      <h1 style={{ margin:"auto"}}>
        {quote[index]}
      </h1>
    </div>
      <button onClick={sagar} style={{fontWeight:"600",backgroundColor:"lightpink",padding:"10px 15px",marginTop:"20px",borderRadius:'8px'}}>New Quote</button>
    </div>
  );
};

export default Updating;