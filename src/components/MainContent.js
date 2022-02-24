import React, {useState, useEffect } from 'react';
import axios from 'axios';

import SearchBox from './SearchBox';
import DevelopersList from './DevelopersList';

import './MainContent.css';

const MainContent = ( {children, onAddDeveloper} ) => {

    const[searchDevProfile, setSearchDevProfile] = useState(''); 
    const[developersData, setDevelopersData] = useState([]);
    const[showAddDeveloperForm , setShowAddDeveloperForm] = useState(false);

    const onAddDeveloperInfo = () => {
        setShowAddDeveloperForm(!showAddDeveloperForm);
        onAddDeveloper();
    }
 
    useEffect( () => {
        if(!searchDevProfile){
            getDevelopers('/api/developers');
        }
 
    },[onAddDeveloper, searchDevProfile])
 
    const onSearchDeveloperProfile = async () => {
        const res = getDevelopers(`/api/developers/search/${searchDevProfile}`);
        setSearchDevProfile(res.data);
        console.log(searchDevProfile);
    }
    const getDevelopers = async (url) => {
        console.log(url);
        const res = await axios.get(url);
        setDevelopersData(res.data);
    }
 
    
    return (
        <>
            {developersData && (<div className = "main-content">
                <div className = "main-heading">{children}</div>
                <hr className="line1" />
                <SearchBox value  = {searchDevProfile} setSearchDevProfile = {setSearchDevProfile} onSearch = {onSearchDeveloperProfile} />
                <DevelopersList developersList = {developersData}/>
                <hr className="line2" />
                <div className="inner-heading-wrapper">
                    {developersData?.length === 0 ? `No developers added yet` : `Could not find what you were looking for?`}
                </div>
                <div className="button-wrapper-main">
                    <button className="button" onClick={onAddDeveloperInfo}>Add developer info</button>
                </div>
            </div>)}
        </>
    );
}

export default MainContent;