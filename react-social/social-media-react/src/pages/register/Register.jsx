import "./register.css";

export default function Register() {
    return (
        <div className = "register">
            <div className="registerWrapper">

                <div className="registerLeft">
                    <h3 className="registerLogo">KamaBook</h3>
                    <span className="registerDesc">“Privacy is dead, and social media hold the smoking gun.”</span>
                </div>

                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder = "Username" className="registerInput" />
                        <input placeholder = "Email" className="registerInput" />
                        <input placeholder = "Password" className="registerInput" />
                        <input placeholder = "Password" className="registerInput" />
                        <button className = "registerButton">Sign up</button>
                        <button className = "registerLoginButton">Log In</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
