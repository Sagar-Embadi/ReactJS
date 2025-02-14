import "./Login.css"

export function Login(){
    return(
    <div className="body">
        <div class="login-container">
            <h2>Login</h2>
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required/>
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required/>
            <button type="submit">Login</button>
        </div>
    </div>
    )
}