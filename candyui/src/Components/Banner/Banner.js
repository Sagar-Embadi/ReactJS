import "./Banner.css"
import img1 from "../../assets/image1.png"

export let Banner = ()=>{
    return(
        <div className="banner">
            <div className="banner_content">
                <h1>Candy is a global branding and UX design agency</h1>
                <p>Elevate your online presence with Candy's expert design, development, and presentation services, bringing your project to fruition.</p>
                <button>Get Started Now</button>
            </div>
            <div className="banner_img">
                <img src={img1} alt=""/>
            </div>
        </div>
    )
}