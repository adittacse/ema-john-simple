import React, {useContext, useState} from 'react';
import "./Login.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../providers/AuthProviders.jsx";

const Login = () => {
    const [error, setError] = useState("");
    const { signIn } = useContext(AuthContext);
    
    const handleLogin = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
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
                    <input type="password" name="password" id="password" required />
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
