import React from 'react';

import './FooterAnimation.css';
import heartImage from '../../images/heart-img.png';

const footerAnimation = (props) => {
    return (
        <div className="FooterAnimation">
            <div className="FooterPlaceholder"></div>
            <div className="FooterHeartAnimation">
                Made and Managed with
                <span className="Heart">
                    <img src={heartImage} style={{width: '15px', height: '15px'}}/>
                </span>
                by &copy; Harshit Pareek (Harry) inspired by Jonathan Bloomer
            </div>
        </div>
    );
};

export default footerAnimation;