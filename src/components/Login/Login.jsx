import React, {useContext, useState} from 'react';
import "./Login.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../providers/AuthProviders.jsx";

const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || "/";
    
    const handleLogin = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                navigate(from, {replace: true});
            })
            .catch(error => {
                setError("Wrong Credentials");
            })
    }
    
    return (
        <div className="form-container">
            <h4 className="form-title">Login</h4>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="password" required />
                    <p onClick={() => setShow(!show)}><small>
                        {
                            show ? <span>Hide Password</span> : <span>Show Password</span>
                        }
                    </small></p>
                </div>
                <input className="btn btn-submit" type="submit" value="Login"/>
            </form>
            <p className="login-text"><small>New to Ema-john? <span><Link className="link" to="/signup">Create New Account</Link></span></small></p>
            <p className="text-error">{error}</p>
            <div className="optional-login">
                <hr/>
                <p><small>or</small></p>
                <hr/>
            </div>
        </div>
    );
};

export default Login;
