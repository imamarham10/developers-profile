import React from 'react';
import classNames from 'classnames';
import './DevelopersList.css';
import { ReactComponent as AccountIcon } from '../images/account_icon.svg';
import { ReactComponent as ArrowIcon } from '../images/arrow_icon.svg';
import { Link } from 'react-router-dom';

const DevelopersList = ({ developersList }) => {
    const developersData = (developersList.map(dev => (
        <div className="account-icon" key={dev.id}>
            {dev.avatar_url ? <img src={dev.avatar_url} alt='avatar_url' className="display-avatar-icon"/> : <img src= {AccountIcon} alt='default_avatar' className="display-account-icon"/>}
            <Link to={`/api/developers/${dev.id}`} className="link">{dev.id}
                <span><ArrowIcon className="arrow-icon" /></span>
            </Link>
        </div>
    )))

    return (
        <div>
            <div className={classNames('display-list1', {
                'display-list2': developersList.length > 0 ? true : false,
                'display-list3': developersList.length === 0 ? true : false,
            })}>
                {developersData}
            </div>
        </div>
    );
}

export default DevelopersList;