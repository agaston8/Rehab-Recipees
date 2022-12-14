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
                        <Link class="navLinks" to='/posts'>Recipes</Link>
                        {/* should this be reidrect? */}
                        <Link  class="navLinks" to='/login'>Login</Link> 
                        <Link  class="navLinks" >My Recipes</Link>
                        <Link  class="navLinks">Logout</Link>
                    </nav>
                </div>
                <div id="searchContainer">
                     <Search/>
                </div>
            </header>
        </>
    )


}