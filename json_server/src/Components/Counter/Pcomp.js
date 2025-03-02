import React, { useEffect } from "react"
import { useState } from "react"
import { C1comp } from "./C1comp"
import "./css.css"
import { C2comp } from "./C2comp"
export function PComp(){
    const[count,setCount] = useState(0)
    useEffect(()=>{
        
    },[])
    return(
        <div className="pDiv">
        <h1>{count}</h1>
        <div className="cDiv">
            <C1comp setCount={setCount}/>
            <C2comp setCount={setCount}/>
        </div>
        </div>
    )
}