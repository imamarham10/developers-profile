/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import axios from 'axios';
import './DevInfoForm.css';

import GithubIcon from '../images/github_logo.png';
import LinkedinIcon from '../images/linkedin_logo.png';
import CodechefIcon from '../images/codechef_logo.png';
import HackerRankIcon from '../images/hackerrank_logo.png';
import TwitterIcon from '../images/twitter_logo.png';
import MediumIcon from '../images/medium_logo.png';
import EmailIcon from '../images/email_icon.svg';

import AccInputFeild from './AccInputFeild';

const DevInfoForm = ({ formClose }) => {

    const [github, setGithub] = useState('');
    const [linkedin, setLinkedIn] = useState('');
    const [codechef, setCodeChef] = useState('');
    const [hackerrank, setHackerRank] = useState('');
    const [twitter, setTwitter] = useState('');
    const [medium, setMedium] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const header = {'Content-Type': 'application/json'};

    const onSubmitHandler = async () => {
        if(github) {
            setError('');
            const inputValue = {
                github_id: github,
                linkedin_id: linkedin,
                codechef_id: codechef,
                hackerrank_id: hackerrank,
                twitter_id: twitter,
                medium_id: medium,
                email_id: email,
            }
             try{
                 await axios.post('/api/developers/', inputValue, {headers:header});
                 setError('');
             } catch (error) {
                 console.log(error.response);
                 setError('Github id not found');
             }
 
        } else {
             setError('Github id is required');
        }
    }

    return (
        <>
        <div className ="form-content">
            <div className = "form-wrapper">
                <div className ="form-heading">
                    Add developer profile
                </div>
                <div className="line"> </div>
                    <div className="input-content">
                        <div className ="input-wrapper"> 
                         <AccInputFeild value={github} setValue={setGithub} label='Github' isRequired={true} image={GithubIcon} error={error} />
                         <AccInputFeild value={linkedin} setValue={setLinkedIn} label='Linkedin' isRequired={false} image={LinkedinIcon}  />
                         <AccInputFeild value={codechef} setValue={setCodeChef} label='Codechef' isRequired={false} image={CodechefIcon}  />
                         <AccInputFeild value ={hackerrank} setValue={setHackerRank} label='Hackerrank' isRequired={false} image={HackerRankIcon}  />
                         <AccInputFeild value={twitter} setValue={setTwitter} label='Twitter' isRequired={false} image={TwitterIcon}  />
                         <AccInputFeild value={medium} setValue={setMedium} label='Medium' isRequired={false} image={MediumIcon}  />
                         <AccInputFeild value={email} setValue={setEmail} label='Email' isRequired={false} image={EmailIcon} />
                        </div>
                    </div>
                <div className="line"> </div>
                <div className ="button-wrapper">
                    <button className = "cancel-button"  onClick={formClose}>Cancel</button>
                    <button className = "submit-button" onClick = {onSubmitHandler} onSubmit={formClose}>Submit</button>
                </div>
            </div>
        </div>
        </>
    );

}

export default DevInfoForm;