import React from 'react';
import wineparty from './Assets/Images/wineparty.png';
import './About.css'

export function About() {
  return (
    <div className='Container'>
    <div className='About'>
<div className='First__image'>
    <img className='About_image' src={wineparty} alt='wine'/>
</div>

<div className='Second__text'>
    <h2 className='Second__title'>Knowing the numbers is never <i>enough</i>.</h2>
    <p className='Second__paragraph'>It's about understanding the opportunities and challenges behind the numbers — and planning for a stronger future. What's the right product selection for your customers? Which tools and information could make your business even more successful? At Southern Glazer's, we tailor our services for each and every one of our customers. Because we know that when we come together, there's always something to celebrate.</p>
</div>

    </div>
    </div>
  )
}

export default About