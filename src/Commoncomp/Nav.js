import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className='Nav'>
      <ul className='navigation'>
        <li><a href="/">Home</a></li>
        <li><a href="/project">Project</a></li>
        <li><a href="/about">About Me</a></li>
        <li><a href="/cv">CV</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Nav
