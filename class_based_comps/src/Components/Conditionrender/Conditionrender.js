import React from "react";
import "./Conditionrender.css"
import { Login } from "../Loginfrom/Login";
class Conditionrender extends React.Component{
  constructor(){
    super()
    this.state={
      loginShow:false
    }
    this.state={
      color:"green"
    }
  }
  render(){
    return(
      <div>
        <button id="button" onClick={()=>this.setState({loginShow:!this.state.loginShow})}>Login</button>
        {this.state.loginShow &&  <Login/>}
      </div>
    )
  }
}
export default Conditionrender;