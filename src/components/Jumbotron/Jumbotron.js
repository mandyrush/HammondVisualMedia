import React from 'react';

import ImageCarousel from '../../containers/ImageCarousel/ImageCarousel';
import classes from './Jumbotron.module.css';

const jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <ImageCarousel />
        </div>
    );
};

export default jumbotron;