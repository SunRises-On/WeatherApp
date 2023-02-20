import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style/HeaderStyle.css';

function NavBar(){
     const navigate = useNavigate();
   
    return(
        <div className='navBar'>
            <h1 className='header'>Weather Front</h1>
            <div className='nav-left'>
                <Link to="/register">
                    <button className='btn' >Register</button>
                </Link>
            </div>
        </div>
    )    
}
export default NavBar;