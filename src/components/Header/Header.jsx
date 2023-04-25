import React, {useContext} from 'react';
import "./Header.css";
import logo from "../../images/Logo.svg";
import {Link} from "react-router-dom";
import {AuthContext} from "../providers/AuthProviders.jsx";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    
    const handleSignOut = () => {
        logOut()
            .then( () => {
            
            })
            .catch( error => {
                console.error(error);
            })
    }
    
    return (
        <nav className="header">
            <img src={logo} alt=""/>
            {/*a[href=$]{$}*4*/}
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
                {
                    user && <span>Welcome {user.email}
                        <button onClick={handleSignOut}>Sign Out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;
