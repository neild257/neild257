import React from 'react';
import './NameWrapper.css';

const nameWrapper = (props) => {
    return (
        <div className='NameWrapper'>
            <span className="Title">
                {props.name}
            </span>
            <span className="Designation">
                {props.designation}
            </span>
        </div>
    );
};

export default nameWrapper;