import React, {useState, useEffect} from 'react';
import { useParams }  from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames';
import { Fragment } from 'react';
import dayjs from 'dayjs';

import GithubIcon from '../images/github_logo.png';
import LinkedinIcon from '../images/linkedin_logo.png';
import CodechefIcon from '../images/codechef_logo.png';
import HackerRankIcon from '../images/hackerrank_logo.png';
import TwitterIcon from '../images/twitter_logo.png';
import MediumIcon from '../images/medium_logo.png';
import {ReactComponent as EmailIcon} from '../images/email_icon.svg';
import {ReactComponent as LinkIcon} from '../images/link_icon.svg';
import {ReactComponent as ArrowIcon} from '../images/arrow_icon.svg';
import {ReactComponent as LocationIcon} from '../images/location_icon.svg';
import {ReactComponent as BusinessIcon} from '../images/business_icon.svg';
import {ReactComponent as AccountIcon} from '../images/account_icon.svg';
import {ReactComponent as PageNotFound} from '../images/page_notfound_icon.svg';

import NavigationBar from '../components/NavigationBar';
import DevAccIcon from '../components/DevAccIcon';
import Footer from '../components/Footer';

import './DeveloperProfile.css';

const DeveloperProfile = () => {
    const [developerProfileInfo, setDeveloperProfileInfo] = useState(null);
    const [load, setLoad] = useState(true);
    const  { developerId }  = useParams();
    console.log(developerId);
    useEffect (() => {
        try{

            const getDeveloperProfile = async () => {
                const res = await axios.get(`/api/developers/${developerId}`);
                console.log();
                setDeveloperProfileInfo(res.data);
               
                setLoad(false);
            }
            getDeveloperProfile();
            
        } catch(error) {
            console.log(error);
            setLoad(false);

        }
    }, [developerId]);

    return(
        <div className = "div-font">
            <NavigationBar />
            { !load && (developerProfileInfo ? (
                <>
                    <div className="profile-content">
                        <div className = "profile-content-wrapper">
                             {developerProfileInfo.avatar_url ? <img src={developerProfileInfo.avatar_url} alt='developer_image' className="profile-image" /> : <AccountIcon className="default-profile-image" />}
                            <div className="profile-div">
                            <div className ="profile-heading">
                                 {developerProfileInfo.name}
                            </div>
                             
                            <div className = {classNames ("profile-info",{
                                  "profile-info-1": (developerProfileInfo.company !== null && developerProfileInfo.bio !== null),
                                  "profile-info-2": (developerProfileInfo.company !== null && developerProfileInfo.bio !== null),
                            })}>
                                  {developerProfileInfo.company && <p>{developerProfileInfo.company}</p>}
                                  {developerProfileInfo.bio && <p>{developerProfileInfo.bio}</p>}
                            </div>
 
                            <div className ="profile-icon-content">
                                 {developerProfileInfo.github_id && (
                                        <DevAccIcon id={developerProfileInfo.github_id} image={GithubIcon} link={`https://github.com/${developerProfileInfo.github_id}`} />
                                 )}  
 
                                 {developerProfileInfo.hackerrank_id && (
                                        <DevAccIcon id={developerProfileInfo.hackerrank_id} image={HackerRankIcon} link={`https://www.hackerrank.com/${developerProfileInfo.hackerrank_id}`} />
                                 )}
                                 
                                 {developerProfileInfo.codechef_id && (
                                        <DevAccIcon id={developerProfileInfo.codechef_id} image={CodechefIcon} link={`https://www.codechef.com/users/${developerProfileInfo.codechef_id}`} />
                                 )}
                                 
                                 {developerProfileInfo.linkedin_id && (
                                        <DevAccIcon id={developerProfileInfo.linkedin_id} image={LinkedinIcon} link={`https://in.linkedin.com/in/${developerProfileInfo.linkedin_id}`} />
                                 )}
                                 
                                 {developerProfileInfo.medium_id && (
                                        <DevAccIcon id={developerProfileInfo.medium_id} image={MediumIcon} link={`https://medium.com/@${developerProfileInfo.medium_id}`} />
                                 )}
                                     
                                 {developerProfileInfo.twitter_id && (
                                        <DevAccIcon id={developerProfileInfo.twitter_id} image={TwitterIcon} link={`https://twitter.com/${developerProfileInfo.twitter_id}`} />
                                 )}
                                 
                                 {developerProfileInfo.email && (
                                        <DevAccIcon id={developerProfileInfo.email_id} image={EmailIcon} link={`mailto:${developerProfileInfo.email}`} />
                                 )}
                             
                            </div>
                              
                            <div className = {classNames ("profile-description", {
                                  "profile-description1": developerProfileInfo.location !== null ||developerProfileInfo.company !== null || developerProfileInfo.blog !== '',
                                  "profile-description2": developerProfileInfo.location !== null || developerProfileInfo.company !== null || developerProfileInfo.blog !== ''
                            })}>
                                        {developerProfileInfo.location &&
                                        <div className="profile-loaction">
                                             <LocationIcon className = "profile-location-icon"/> 
                                             <span className="location-icon1">{developerProfileInfo.location}</span>
                                        </div>}
 
                                        {developerProfileInfo.company &&
                                        <div className="profile-company">
                                             <BusinessIcon className = "profile-company-icon"/> 
                                             <span className="company-icon1">{developerProfileInfo.company}</span>
                                             
                                        </div>}
 
                                        {developerProfileInfo.blog &&
                                        <div className="profile-blog">
                                             <LinkIcon className = "profile-blog-icon"/> 
                                             <span className="blog-icon1">{developerProfileInfo.blog}</span>
                                             
                                        </div>}
                            </div>
                            </div>
                        </div>
                    </div> 
                    <div className ="profile-margin">
                        <div className ="profile-repo-content">
                             Github Repositories
                        </div>
                        <div className="profile-repo-border" />
                        <>
                             {developerProfileInfo.repos.length > 0 && (
                                 developerProfileInfo.repos.map(repo => (
                                     <Fragment key={repo.name}>
                                         <div className="profile-repo-wrapper">
                                             <a rel='noreferrer' target='_blank' href={repo.html_url} className="profile-repo-redirect">
                                                 {repo.name}
                                                 <span><ArrowIcon className="profile-link-arrow" /></span>
                                                 <span className="profile-repo-time">Updated on {dayjs(repo.updated_at).format('DD MMM YYYY')}</span>
                                             </a>
                                             <div className="profile-repo-description">
                                                 {repo.description}
                                             </div>
                                         </div>
                                         <div className="profile-repo-border2" />
                                     </Fragment>
                                 ))
                             )}
                        </>
                    </div>
                </>
            ) : ( <PageNotFound /> )
            )}
            <Footer/>
        </div>
     );
}

export default DeveloperProfile;