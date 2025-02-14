import "./Footer.css"
import { VscGithub} from "react-icons/vsc";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
export function Footer(){
    return(
        <div className="footer">
            <h1>Landy</h1>
            <div className="footer_icons">
                <VscGithub/>
                <FiTwitter/>
                <CiLinkedin/>
                <FaPhone/>
                <IoMail/>
            </div>
        </div>
    )
}