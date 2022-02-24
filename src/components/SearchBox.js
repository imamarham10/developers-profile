import React from 'react';
import './SearchBox.css';
import { ReactComponent as SearchIcon } from '../images/search_icon.svg';

const SearchBox = ({ value, setSearchDevProfile, onSearch}) => {
    return (
        <div className="search-content">
            <div className="content-wrapper">
                <input type="text" placeholder="Search for username" className="search-bar" 
                value={value} onChange={ (e) => setSearchDevProfile(e.target.value)} spellCheck = "false"/>
                <SearchIcon className="search-icon" onClick={onSearch} />
            </div>
        </div>
    );
}

export default SearchBox;