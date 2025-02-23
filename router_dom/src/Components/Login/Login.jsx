import "./Login.css"
export function Login(){
    return(
        <section class="auth-section">
        <h2>Login</h2>
        <div class="auth-content">
            <div class="auth-form">
                <form action="#" method="POST">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required/>

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required/>

                    <button type="submit" class="submit-btn">Login</button>

                    <p class="auth-footer">Don't have an account? <a href="signup.html">Sign Up</a></p>
                </form>
            </div>
        </div>
    </section>
    )
}
export function Signup(){
    return(

    <section class="auth-section">
        <h2>Sign Up</h2>
        <div class="auth-content">
            <div class="auth-form">
                <form action="#" method="POST">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your full name" required/>

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required/>

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required/>

                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required/>

                    <button type="submit" class="submit-btn">Sign Up</button>

                    <p class="auth-footer">Already have an account? <a href="login.html">Log In</a></p>
                </form>
            </div>
        </div>
    </section>
    )
}