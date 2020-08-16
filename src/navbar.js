import React from 'react';
import { Link } from 'react-router-dom';
import logo from './kake.png';
import './App.css';

function NavBar () {
    return(
        <nav className="navbar">
            <Link to="/"><img src={logo} alt="Logo"/></Link>
        </nav>
    );
}

export default NavBar;