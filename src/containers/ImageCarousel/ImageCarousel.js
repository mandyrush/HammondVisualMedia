import React, {Component} from 'react';
import Carousel from 'nuka-carousel';

import TestImage from '../../assets/images/test_image.jpg';
import TestImage2 from '../../assets/images/test_image2.jpg';
import TestImage3 from '../../assets/images/test_image3.jpg';
import TestImage4 from '../../assets/images/test_image4.jpg';

class ImageCarousel extends Component {
    state = {
        autoplayInterval: 5000,
        speed: 1000
    }

    render() {
        return (
            <Carousel
                autoplay
                wrapAround
                enableKeyboardControls
                withoutControls
                autoplayInterval={this.state.autoplayInterval}
                speed={this.state.speed}
                pauseOnHover={false}
            >
                <img src={TestImage} alt="Images of Kelvin's work" />
                <img src={TestImage2} alt="Images of Kelvin's work" />
                <img src={TestImage3} alt="Images of Kelvin's work" />
                <img src={TestImage4} alt="Images of Kelvin's work" />
            </Carousel>
        );
    }
}

export default ImageCarousel;