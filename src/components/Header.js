import React from 'react';
import devImage from '../images/header_image.png';

import './Header.css';

const Header = ({ isFormOpen }) => {
    return (
        <div className="header-content">
            <div className="header-content-wrapper">
                <h1 className="header-heading">The Developer Repository</h1>
                <img src={devImage} alt="developer" className="header-image"></img>
            </div>
        </div>
    );
}

export default Header;