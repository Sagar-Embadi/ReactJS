import "./Login.css"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const nav=useNavigate()
    const [loginDetails,setLoginDetails]=useState({email:"",password:""})
    const [loginUsers,setLoginUsers] = useState([])

    const handleDetailsLogin=(e)=>{
      setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
      axios.get("http://localhost:4000/users").then(res=>{
        console.log(res.data);
        setLoginUsers(res.data)
        
      })
    },[])
    const handleSubmitLogin=(e)=>{
        e.preventDefault()
      
      const loginFormData=loginDetails;

    const userFound=  loginUsers.find(x=>x.email === loginFormData.email && x.password === loginFormData.password)


    if(userFound){
        alert("login successfully done!!!")
        axios.put("http://localhost:4000/loggedInUser",userFound)
        nav("/home")
    }else{
        alert("invalid credentials")
    }
      console.log(loginFormData,"all login data")
      console.log(loginUsers,"alluserfromls")
    }

  return (
    <div className="auth-content" >
    <div className="auth-form">
      <form onSubmit={handleSubmitLogin}>
        <input
          type="email"
          placeholder="email here"
          name="email"
          onChange={handleDetailsLogin}
        //   value={loginDetails.email}
        />
        <input
          type="password"
          placeholder="password here"
          name="password"
          onChange={handleDetailsLogin}
        //   value={loginDetails.password}
        />
        <button className="submit-btn">Login</button>
      </form>
    </div>
    </div>
  )
}

export default Login