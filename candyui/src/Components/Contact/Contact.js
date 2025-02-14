import "./Contact.css"
import { MdOutlineDoubleArrow } from "react-icons/md";

export let Contact=()=>{
    return(
        <div className="contact">
            <div className="content">
                <span>Ready to take your project to the next level with?</span>
                <h1>Get in touch with us today to discuss about your project and discover how we can assist you in crafting, building, and presenting a reputable online brand.</h1>
                <p>We'll get back to you as soon as possible to schedule a consultation and discuss how we can support your project.</p>
            </div>
            <div className="contact_form">
                <div className="form_inputs">
                    <input type="text" placeholder="Sagar Embadi"></input>
                    <input type="email" placeholder="sagar@gmail.com"></input>
                </div>
                <textarea></textarea>
                <button>Send Message <MdOutlineDoubleArrow/></button>
            </div>
        </div>
    )
}