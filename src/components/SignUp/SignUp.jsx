import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import "./SignUp.css";
import {AuthContext} from "../providers/AuthProviders.jsx";

const SignUp = () => {
    const [error, setError] = useState("");
    const { createUser } = useContext(AuthContext);
    
    const handleSignUp = (event) => {
        event.preventDefault();
        setError("");
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email, password, confirmPassword);
        
        if (password !== confirmPassword) {
            setError("Your Password Didn't Match!")
            return;
        } else if (password.length < 6) {
            setError("Your Password Must Be 6 Characters Long!");
            return;
        }
        
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
            })
            .catch(error => {
                setError(error.message);
            })
    }
    
    return (
        <div className="form-container">
            <h4 className="form-title">Sign Up</h4>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" required />
                </div>
                <input className="btn btn-submit" type="submit" value="Sign Up"/>
            </form>
            <p className="login-text"><small>Already have an account? <span><Link to="/login">Login</Link></span></small></p>
            <p className="text-error">{error}</p>
        </div>
    );
};

export default SignUp;