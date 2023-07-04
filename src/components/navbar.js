import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingBag } from "phosphor-react";
import './navbar.css'

function Navbar() {
    return(
        
        <div className='navbar'>
            <div className='logo-link'>
                <Link to='/'>PopularShop</Link>
            </div>
            <div className='links'>
                
                <Link to="/">SHOP</Link>
                <Link to="/cart"><ShoppingBag size={28}/></Link>
            </div>
        </div>
    )
}

export default Navbar  