import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
       
      <nav className='Header'>
        <img src={logo} alt="" />

        <div>
            <a href="\order">Order</a>
            <a href="\order Review">Order Review</a>
            <a href="\manage inventory">Manage Inventory</a>
            <a href="\Login">Login</a>
        </div>

      </nav>
        
    );
};

export default Header;