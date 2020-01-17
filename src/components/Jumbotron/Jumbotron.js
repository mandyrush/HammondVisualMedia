import React from 'react';

import ImageCarousel from '../UI/ImageCarousel/ImageCarousel';
import classes from './Jumbotron.module.css';

const jumbotron = () => {
    return (
        <div className={classes.Jumbotron} id="Jumbotron">
            <ImageCarousel />
        </div>
    );
};

export default jumbotron;