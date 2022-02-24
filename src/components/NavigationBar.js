import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <>
          <div className="nav-content">
            <Link  className="nav1" to='/'>The Developer Profile</Link>
            <Link className="nav1" to='/'>All Developers</Link>
          </div>
        </>
    );
}

export default NavigationBar;