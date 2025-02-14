import "./task1.css"
function Task1(){
    return(
        <>
        <div className="navBar">
            <img src="https://th.bing.com/th/id/OIP.2H8nYj4X1vsGbGOTgbn30AHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Logo"/>
            <div className="navRight">
                <span>Documentation</span>
                <button>Sign Up</button>
            </div>
        </div>
        <Body></Body>
        </>
    )
}
let Body = ()=>{
    return (
        <div className="body">
        <h1>Landing Template for <span>Startups</span></h1>
        <p>Our landing page template works on all devices, so you only have</p>
        <p>to set it up once, and get beautiful results forever.</p>
        <div className="btnDiv">
            <button id="btnBlue">Get started</button>
            <button>View on Github</button>
        </div>
        </div>
    )
}
export{Task1}
