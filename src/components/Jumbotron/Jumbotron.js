import React from 'react';

import ImageCarousel from '../UI/ImageCarousel/ImageCarousel';
import classes from './Jumbotron.module.css';

import TestImage from '../../assets/images/testImages/test_image.jpg';
import TestImage2 from '../../assets/images/testImages/test_image2.jpg';
import TestImage3 from '../../assets/images/testImages/test_image3.jpg';
import TestImage4 from '../../assets/images/testImages/test_image4.jpg';


const jumbotron = () => {
    return (
        <div className={classes.Jumbotron} id="Jumbotron">
            <ImageCarousel 
                autoplayInterval={5000} 
                speed={1000}
                pauseOnHover={false}
                slideIndex={0} >
                    <img src={TestImage} alt="Images of Kelvin's work" />
                    <img src={TestImage2} alt="Images of Kelvin's work" />
                    <img src={TestImage3} alt="Images of Kelvin's work" />
                    <img src={TestImage4} alt="Images of Kelvin's work" />
            </ImageCarousel>
        </div>
    );
};

export default jumbotron;