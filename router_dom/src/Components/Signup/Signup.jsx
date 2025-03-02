import React, { useState ,useEffect} from "react";
import "./Signup.css"
import axios from "axios"
const SignUp = () => {
  const [signupDetails, setDSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [allUsers,setAllUsers]=useState([])

  console.log(signupDetails);
  const handleDetails = (e) => {
    setDSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  useEffect (()=>{
    const storedUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    setAllUsers (storedUsers);
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
   axios.post("http://localhost:4000/users",signupDetails)
   setDSignupDetails({ name: "", email: "", password: "" });
    alert("signup successful done!!");
  };
  console.log(allUsers)
  return (
    <div className="auth-content" >
        <div class="auth-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name here"
          name="name"
          onChange={handleDetails}
          value={signupDetails.name}
        />
        <input
          type="email"
          placeholder="email here"
          name="email"
          onChange={handleDetails}
          value={signupDetails.email}
        />
        <input
          type="password"
          placeholder="password here"
          name="password"
          onChange={handleDetails}
          value={signupDetails.password}
        />
        <button className="submit-btn">SignUp</button>
      </form>
    </div>
    </div>
  );
};

export default SignUp;