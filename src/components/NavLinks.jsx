import React from 'react';
import './NavLinks.css';

export function NavLinks() {


    //const pages = ['Home', 'Portfolio', 'Suppliers', 'Careers', 'Our Classes', 'News', 'About us'];
  return (
    <div className='Navbar__menu'>
      <ul className='Links__menu'>
          <li className='Links'><a className='Link active' href='#'>Home</a></li>
          <li className='Links'><a className='Link' href='#'>Portfolio</a></li>
          <li className='Links'><a className='Link' href='#'>Suppliers</a></li>
          <li className='Links'><a className='Link' href='#'>Careers</a></li>
          <li className='Links'><a className='Link' href='#'>Our Classes</a></li>
          <li className='Links'><a className='Link' href='#'>News</a></li>
          <li className='Links'><a className='Link' href='#'>About us</a></li>
      </ul>

      </div>
  )
}

export default NavLinks