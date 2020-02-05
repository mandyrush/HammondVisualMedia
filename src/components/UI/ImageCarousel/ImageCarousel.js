import React from 'react';
import Carousel from 'nuka-carousel';

const imageCarousel = (props) => {
    return (
        <Carousel
            autoplay
            wrapAround
            enableKeyboardControls
            withoutControls
            autoplayInterval={props.autoplayInterval}
            speed={props.speed}
            pauseOnHover={props.pauseOnHover}
            slideIndex={props.slideIndex}
        >
            {props.children}
        </Carousel>
    );
}

export default imageCarousel;