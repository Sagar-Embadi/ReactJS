import "./Contact.css"
export function Contact(){
    return(
        <div className="contact">
            <div className="contact_content">
                <h1>Contact form</h1>
                <p>The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty.</p>
            </div>
            <div className="contact_form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name"></input>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email"></input>
                <label htmlFor="message">Message</label>
                <textarea name="" id="message" placeholder="Your Message"></textarea>
                <button>Submit</button>
            </div>
        </div>
    )
}