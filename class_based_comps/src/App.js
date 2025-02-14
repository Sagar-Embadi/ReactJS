
import Conditionrender from './Components/Conditionrender/Conditionrender';

function App() {
  return (
    <div className="App">
      <Conditionrender/>
    </div>
  );
}

export default App;


// import React from "react"
// class App extends React.Component{

//   constructor(){
//     super()
//     this.state={
//       count:0
//      }
//   }

//   decrement=()=>{
//        this.setState({
//         count:this.state.count-1
//        })
//   }

//   increment=()=>{
//     this.setState({
//      count:this.state.count+1
//     })
// }

//   render(){
//     return(
//       <div style={{textAlign:"center"}}>
//         <button onClick={this.decrement}>Decrement</button>
//         {this.state.count}
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }
// export default App



// import React from "react";
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       loginShow:false
//     }
//     this.state={
//       color:"green"
//     }
//   }
//   render(){
//     return(
//       <div style={{backgroundColor:this.state.color}}>
        
//         <button onClick={()=>this.setState({loginShow:!this.state.loginShow})}>Login</button>
//         {this.state.loginShow &&  <div>
//           <input />
//           <input />
//           <input />
//           <input />
//         </div>}

//         <button onClick={()=>this.setState({color:this.state.color="red"})}>red</button>
//         <button onClick={()=>this.setState({color:this.state.color="blue"})}>blue</button>
//         <button onClick={()=>this.setState({color:this.state.color='navy'})}>navy blue</button>
//       </div>
//     )
//   }
// }
// export default App;