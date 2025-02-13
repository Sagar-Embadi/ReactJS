import "./Footer.css"
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

export let Footer = ()=>{
    return(
        <div className="footer">
            <div className="about">
                <h4>About Us</h4>
                <p>As a founder seeking web design solutions, you're familiar with the challenges of project realisation. The path to success can be challenging, spanning the search for experienced talent to navigating project delays and budgetary constraints.</p>
            </div>
            <div className="pages">
                <h4>Pages for you</h4>
                <p>Explore our pages</p>
                <div className="page_links">
                    <span>Home <br/> Design</span>
                    <span>About <br/> Development</span>
                    <span>Contact Us <br/> Pitch Decks</span>
                </div>
            </div>
            <div className="Contact">
                <h4>Contact With Us</h4>
                <p>Here are the official links to our social media platform. Feel free to reach out to us through any of the following links below</p>
                <div className="contact_links">
                <span><span><IoIosMail/>info@candy.co</span> <br/> <span><FaLinkedin/>CANDY</span></span>
                <span><span><GrTwitter/> @candy</span> <br/> <span><FaInstagram/> @candyui</span></span>
                </div>
            </div>
        </div>
    )
}