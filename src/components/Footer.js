import React from 'react';

import './Footer.css';
import { ReactComponent as Heart } from '../images/heart_icon.svg';

const Footer = () => {
    return (
        <footer className="footer-content">
            Made with
            <Heart className="footer-icon"></Heart>
            by Arham
        </footer>
    );
}

export default Footer;