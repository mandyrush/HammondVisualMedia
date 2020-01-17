import React from 'react';

import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <a href="/">
            <img 
                onMouseOver={props.hoverEnter}
                onMouseLeave={props.hoverLeave}
                src={props.logoSrc} 
                alt="Hammond Visual Media Logo" 
                className={classes.Logo}/>
        </a>
    );
}

export default logo;