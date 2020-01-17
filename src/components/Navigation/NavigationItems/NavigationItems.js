import React from 'react';

import classes from './NavigationItems.module.css';

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems} id="NavigationItems">
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#ContactMe">Contact</a></li>
            <li><a href="#AboutMe">About</a></li>
        </ul>
    );
}

export default navigationItems;