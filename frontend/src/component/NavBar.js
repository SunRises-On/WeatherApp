import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/HeaderStyle.css';

function NavBar(){
     const navigate = useNavigate();
   
    return(
        <div className='navBar'>
            <h1 className='header'>Weather Front</h1>
            <div className='nav-left'>
                <button className='btn'>Login</button>
            </div>
        </div>
    )    
}
export default NavBar;