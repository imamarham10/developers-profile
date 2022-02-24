import React from 'react';
import './DevAccIcon.css';

const DevAccIcon = ({ id, image, link}) => {
    return (
        <>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={image} alt={id} className="dev-account-icon"></img>
            </a>
        </>
    );
}

export default DevAccIcon;