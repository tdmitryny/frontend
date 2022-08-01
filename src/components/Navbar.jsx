import React from 'react';
import './Navbar.css';
import logo  from './Assets/Images/logo.png';
import Instagram  from './Assets/Images/Instagram.svg';
import Facebook  from './Assets/Images/Facebook.svg';
import Twitter  from './Assets/Images/Twitter.svg';
import {NavLinks} from './NavLinks';


export function Navbar() {


  return (
    <div className='Container'>
    <div className='Header__icons'>
        <div className='Social_icons'>
            <img src={Instagram} alt='Instagram'/>
            <img src={Facebook} alt='Facebook'/>
            <img src={Twitter} alt='Twitter'/>
        </div>
    </div>
        <div className='Login'>
            <a href='#' className='Login__link'>Log In</a>
        </div>
    
    <nav className='Navbar'>
      <div className='Logo'>
          <img src={logo} alt='Logo'/>
      </div>
      <NavLinks/>
    </nav>
    </div>
  )
}

export default Navbar