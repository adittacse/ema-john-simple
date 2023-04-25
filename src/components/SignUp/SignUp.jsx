import React from 'react';
import "./SignUp.css";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className="form-container">
            <h4 className="form-title">Sign Up</h4>
            <form>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirm-password" id="confirm-password" required />
                </div>
                <input className="btn btn-submit" type="submit" value="Sign Up"/>
            </form>
            <p><small>Already have an account? <span><Link to="/login">Login</Link></span></small></p>
        </div>
    );
};

export default SignUp;