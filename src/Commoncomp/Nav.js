import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='Nav'>
      <ul className='navigation'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/cv">CV</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Nav
