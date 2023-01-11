import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/HeaderStyle.css';

function NavBar(){
     const navigate = useNavigate();
   
    return(
        <div className='navBar'>
            <h1 className='header'>header</h1>
            <div className='nav-left'>
                <button className='btn'>button</button>
            </div>
        </div>
    )    
}
export default NavBar;