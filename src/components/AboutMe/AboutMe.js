import React from 'react';

import KelvinImage from '../../assets/images/about_image.jpg';
import classes from './AboutMe.module.css';

const aboutMe = () => {
    return (
        <article className={classes.AboutMe} id="AboutMe">
            <figure>
                <img src={KelvinImage} alt="Kelvin Hammond" />
            </figure>
            <h2>About Me</h2>
            <hr />
            <p>
                For Kelvin Hammond, photography is as essential as breathing… 
                Born in Salt Lake City in 1961, and raised in countries around 
                the world, Kelvin is a self-taught photographer, who in anticipation 
                of being rejected by the finest photography schools, felt compelled 
                to open a studio in Billings Montana, a matter of fortuitous 
                convenience, and began photographing whatever showed up at his 
                doorstep – kids, dogs, food, machinery, businessmen, brides, and 
                the occasional person who felt clothing was completely optional, 
                all of which has contributed to his vast experience of photographing 
                nearly everything under the sun. Today, Kelvin’s photographic 
                interests lie in architecture and in creating art, paying 
                considerable attention to form and palette, capturing the essence 
                of what is before him, and then interpreting it to refine both form 
                and color in the post-process with a dedication that is akin to the 
                making of a deep red wine that doesn’t take itself too seriously, 
                the notes of which are welcome & familiar.  :)
            </p>
            <hr />
        </article>
    );
}

export default aboutMe;