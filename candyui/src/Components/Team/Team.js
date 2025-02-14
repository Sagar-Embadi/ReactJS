import "./Team.css"
import { MdOutlineDoubleArrow } from "react-icons/md";
import teamImg from "../../assets/team.png"

export let Team = ()=>{
    return(
        <div className="team">
            <div className="team_content">
                <span className="label">OUR TEAM</span>
                <h1>The Brains Behind the Operation</h1>
                <p>At Candy, we take pride in our accomplished and diverse team of specialists committed to empowering founders to thrive in the digital realm.<br/>Our team comprises adept project managers, versatile developers, innovative designers, and visionary artists, each boasting a demonstrated history of success in the field.</p>
                <button> More About us <MdOutlineDoubleArrow /></button>
            </div>
            <div className="team_img">
                <img src={teamImg} alt="brand"/>
            </div>
        </div>
    )
}