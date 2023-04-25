import React from 'react';
import "./Login.css";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="form-container">
            <h4 className="form-title">Login</h4>
            <form>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <input className="btn btn-submit" type="submit" value="Login"/>
            </form>
            <p className="login-text"><small>New to Ema-john? <span><Link to="/signup">Create New Account</Link></span></small></p>
        </div>
    );
};

export default Login;
