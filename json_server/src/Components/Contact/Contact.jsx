import "./Contact.css"
export function Contact(){
    return(
        <>
            <section class="contact-section">
        <h2>Contact Us</h2>
        <div class="contact-content">
            <div class="contact-info">
                <h3>Get In Touch</h3>
                <p>If you have any questions, suggestions, or just want to say hello, we would love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.</p>
                <h3>Our Location</h3>
                <p>Delicious Recipes Inc.</p>
                <p>Road No.3,KPHB colony, Hyderabad, India</p>
                <p>Email: <a href="mailto:info@sagarembadi7@gmail.com">sagarembadi7@gmail.com</a></p>
                <p>Phone: +91 9493004681</p>
            </div>
            <div class="contact-form">
                <form action="#" method="POST">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required/>

                    <label for="email">Your Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required/>

                    <label for="message">Your Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>

                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>
        </>
    )
}