import "./Services.css"
import { MdOutlineDoubleArrow } from "react-icons/md";
import brand from "../../assets/Branding.png"
import design from "../../assets/design.png"
import develop from "../../assets/development.png"

export let Services = ()=>{
    return(
        <div className="servicesDiv">
        <Service1/>
        <Service2/>
        <Service3/>
        </div>
    )
}
let Service1 = ()=>{
    return(
        <div className="service1">
            <div className="service_content">
                <span className="label">IDENTITY</span>
                <h1>Branding</h1>
                <p>Working hand in hand with you, Candy specializes in sculpting unique brand identities that set you apart in the market. Whether it's crafting logos or defining brand elements, rely on our expertise to create a refined and memorable brand image online.</p>
                <button>Learn More <MdOutlineDoubleArrow /></button>
            </div>
            <div className="service_img">
                <img src={brand} alt="brand"/>
            </div>
        </div>
    )
}
let Service2 = ()=>{
    return(
        <div className="service2">
            <div className="service_content">
                <span className="label">CRAFT</span>
                <h1>Design</h1>
                <p>Collaborating closely with you, Candy excels in designing captivating visual identities that differentiate you in the market. Whether it's crafting stunning graphics or conceptualising website aesthetics, trust our expertise to curate a polished and unforgettable design language for your brand.</p>
                <button>Learn More <MdOutlineDoubleArrow /></button>
            </div>
            <div className="service_img">
                <img src={design} alt="brand"/>
            </div>
        </div>
    )
}
let Service3 = ()=>{
    return(
        <div className="service1">
            <div className="service_content">
                <span className="label">MAKE</span>
                <h1>Development</h1>
                <p>At Candy, our seasoned team possesses the know-how and proficiency to transform your idea into reality. Utilising cutting-edge technologies and industry best practices, we guarantee that your project is not only functional and scalable but also secure and user-centric.</p>
                <button>Learn More <MdOutlineDoubleArrow /></button>
            </div>
            <div className="service_img">
                <img src={develop} alt="brand"/>
            </div>
        </div>
    )
}