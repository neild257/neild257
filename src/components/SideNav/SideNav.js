import React from 'react';
import './SideNav.css';

import ProfilePic from './ProfilePic/ProfilePic';
import NameWrapper from './NameWrapper/NameWrapper';

const sideNav = (props) => {

    return (
        <div className="SideNav">
            <div className="ProfileWrapper">
                <ProfilePic />
                <NameWrapper 
                    name={props.name}
                    designation={props.designation}
                />
            </div>
            <div className="ContactDetails">
                <div className="DetailItem">
                    <i className="glyphicon glyphicon-send"></i>
                    <a href={`mailto:${props.email}`} target="_blank" >{props.email}</a>
                </div>
                <div className="DetailItem">
                    <i className="glyphicon glyphicon-earphone"></i>
                    <span>{props.phone}</span>
                </div>
                <div className="DetailItem">
                    <i className="glyphicon glyphicon-home"></i>
                    <span>{props.city}, {props.state}</span>
                </div>
            </div>
            <div className="SocialMedia">
                <a href={props.github} target="_blank" className="fa fa-2x fa-github"></a>
                <a href={props.linkedin} target="_blank" className="fa fa-2x fa-linkedin"></a>
                <a href={props.twitter} target="_blank" className="fa fa-2x fa-twitter"></a>
                <a href={props.facebook} target="_blank" className="fa fa-2x fa-facebook"></a>
            </div>
        </div>
    );
};

export default sideNav;