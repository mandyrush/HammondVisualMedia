import React from 'react';

import TestImage from '../../assets/images/test_image.jpg';
import classes from './Jumbotron.module.css';

const jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <img src={TestImage} alt="Images of Kelvin's work" />
        </div>
    );
};

export default jumbotron;