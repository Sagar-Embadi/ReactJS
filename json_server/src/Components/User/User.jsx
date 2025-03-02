import axios from "axios"
import {useEffect, useState } from "react"
export function User(){
    const[user,setUser] = useState({})
    useEffect(()=>{
        axios.get("http://localhost:4000/loggedInUser").then(res=>setUser(res.data) )
    },[])
    return(
        <div>
            <p>ID: {user.id}</p>
            <p>NAME: {user.name}</p>
            <p>EMAIL: {user.email}</p>
        </div>
    )
}