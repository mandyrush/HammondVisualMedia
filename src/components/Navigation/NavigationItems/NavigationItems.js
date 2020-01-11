import React from 'react';

import classes from './NavigationItems.module.css';

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Portfolio</li>
        </ul>
    );
}

export default navigationItems;