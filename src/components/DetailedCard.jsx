import { useContext } from "react";
import { AppContext } from "../App";

import locationIcon from "../assets/locationIcon.svg";
import twitterIcon from "../assets/twitterIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import companyIcon from "../assets/companyIcon.svg";

import "../styles/DetailedCard.css";

const DetailedCard = () => {
    const { moonTheme, userData, result } = useContext(AppContext);

    return (
        <div className={`${result ? 'show' : 'hide'} ${moonTheme ? 'detailedCard detailedCardMoonTheme' : 'detailedCard detailedCardSunTheme'}`}>
            <div className="avatar">
                <img src={userData.avatar_url} alt="avatar" />
            </div>
            <div className="info">
                <div className="header">
                    <h2>{userData.name}</h2>
                    <p>{userData.created_at}</p>
                </div>
                <div className="content">
                    <a 
                        href={`https://github.com/${userData.login}`} 
                        target="_blank"
                        className="login"
                    >
                            {userData.login}
                    </a>
                    <p className={userData.bio ? 'filled' : 'blank'}>
                        {userData.bio ? userData.bio : 'This profile has no bio'}
                    </p>
                    <div className={moonTheme ? 'stats-record statsMoonTheme' : 'stats-record statsSunTheme'}>
                        <div className="repos">
                            <p>Repos</p>
                            <p className="stats">{userData.public_repos}</p>
                        </div>
                        <div className="followers">
                            <p>Followers</p>
                            <p className="stats">{userData.followers}</p>
                        </div>
                        <div className="following">
                            <p>Following</p>
                            <p className="stats">{userData.following}</p>
                        </div>
                    </div>
                    <div className="personal-info-list">
                        <div className="personal-info">
                            <img src={locationIcon} alt="location icon" />
                            <p className={userData.location ? 'filled' : 'blank'}>
                                {userData.location ? userData.location : 'Not Available'}
                            </p>
                        </div>
                        <div className="personal-info">
                            <img src={twitterIcon} alt="email icon" />
                            <p className={userData.twitter ? 'filled' : 'blank'}>
                                {userData.twitter ? userData.twitter : 'Not Available'}  
                            </p>
                        </div>
                        <div className="personal-info">
                            <img src={websiteIcon} alt="website icon" />
                            <a 
                                href={userData.blog && (
                                        userData.blog.startsWith('http') ? 
                                        userData.blog : `https://${userData.blog}`)
                                     }
                                className={`${moonTheme ? 'linkMoonTheme' : 'linkSunTheme'} ${userData.blog ? 'filled' : 'blank'}`}
                                target="_blank"
                            >
                                    {userData.blog ? userData.blog : 'Not Available'}                             
                            </a>

                        </div>
                        <div className="personal-info">
                            <img src={companyIcon} alt="company icon" />
                            <p className={userData.company ? 'filled' : 'blank'}>
                                {userData.company ? userData.company : 'Not Available'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedCard;