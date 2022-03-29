import React from 'react';
import {  Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
                    <li className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">Home</Link>
                    </li> 
            </div>
        </div>
        
         );
}
 
export default Navbar;