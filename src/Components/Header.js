import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search'

export default function Header(props) {
    return(
        <>
            <header>
                <div id="navContainer">
                    <h1>IMMC Rehab Cookbook</h1>
                    <nav id="navbar">
                        <Link className="navLinks" to='/recipes'>Recipes</Link>
                        {/* should this be reidrect? */}
                        <Link  className="navLinks" to='/login'>Login</Link> 
                        <Link  className="navLinks" >My Recipes</Link>
                        <Link  className="navLinks">Logout</Link>
                    </nav>
                </div>
                <div id="searchContainer">
                     <Search/>
                </div>
            </header>
        </>
    )


}