import "./navbar.css"
 export let Navbar = ()=>{
    return(
        <div className="navbar">
            <div className="brand">Landy</div>
            <div className="nav_links">
                <span>About</span>
                <span>Mission</span>
                <span>Product</span>
                <button>Contact</button>
            </div>
        </div>
    )
 }