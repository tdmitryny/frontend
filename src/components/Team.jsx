import React from 'react';
import './Team.css';
import Ellipse from './Assets/Images/Ellipse.png';

export function Team() {
  return (
     
    <div className='Container'>
    <div className='Team'>
        <div className='Customer'>
          <div className='Ellipse'>
              <img src={Ellipse} alt='Ellipse'/>
         </div>
            <p className='Name'>Customer</p>
            <a className="Name__link" href={Ellipse}>See our portfolio</a>
        </div>
        <div className='Customer'>
          <div className='Ellipse'>
              <img src={Ellipse}alt='Ellipse'/>
         </div>
            <p className='Name'>Suppliers</p>
            <a  className="Name__link" href='#'>Work with us</a>
        </div>
        <div className='Customer'>
          <div className='Ellipse'>
              <img className="Name__link" src={Ellipse} alt='Ellipse'/>
         </div>
            <p className='Name'>Team</p>
            <a  className="Name__link" href='#'>Sign in or Apply</a>
        </div>

    </div>
    </div>
    
  )
}

export default Team