import React from 'react';
import './ProfilePic.css';

import profileImage from '../../../images/pp.jpeg';

const profilePic = (props) => {
    return (
        <img 
            src={profileImage}
            className='ProfilePic'
        />
    );
};

export default profilePic;