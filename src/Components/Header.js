import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return(
        <>
            <header>
                <h1>IMMC Rehab Cookbook</h1>
                <nav>
                    <Link to='/posts'>Recipes</Link>
                    {/* should this be reidrect? */}
                    <Link to='/login'>Login</Link> 
                    <Link>My Recipes</Link>
                    <Link>Logout</Link>
                </nav>
            </header>
        </>
    )


}