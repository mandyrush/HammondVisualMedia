import React from 'react';

import classes from './NavigationItems.module.css';

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems} id="NavigationItems">
            <li>Home</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
    );
}

export default navigationItems;