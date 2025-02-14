import "./banner.css"
function Banner(){
    return(
        <div className="banner">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            {/* <Card></Card> */}
        </div>
    )
}
let  Card = ()=>{
    return(
        <div className="card">
        <img src="https://th.bing.com/th/id/OIP.7HO5JGr6NPE7wE6YXVi8lgHaEK?rs=1&pid=ImgDetMain" alt="cards"/>
        <button>Add To Cart</button>
        <button>Buy Now</button>
    </div>
    )
}
export {Card,Banner}