import React from 'react';
import {Link} from 'react-router-dom';

export default function Login(props) {
    return(
        <>
            <form>
                <label>Username:</label>
                <input></input>
                <label>Password</label>
                <input></input>
                <button>Submit</button>
            </form>
            <h4>New User? Register <Link to='/registration'>here</Link> </h4>
        </>
    )
}