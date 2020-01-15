import React, {Component} from 'react';
import Carousel from 'nuka-carousel';

import TestImage from '../../assets/images/test_image.jpg';

class ImageCarousel extends Component {
    state = {
        autoplayInterval: 7000,
        pauseOnHover: false,
        speed: 1200
    }

    render() {
        return (
            <Carousel
                autoplay
                wrapAround
                enableKeyboardControls
                renderCenterLeftControls={null}
                renderCenterRightControls={null}
                autoplayInterval={this.state.autoplayInterval}
                speed={this.state.speed}
                pauseOnHover={this.state.pauseOnHover}
            >
                <img src={TestImage} alt="Images of Kelvin's work" />
                <img src={TestImage} alt="Images of Kelvin's work" />
                <img src={TestImage} alt="Images of Kelvin's work" />
            </Carousel>
        );
    }
}

export default ImageCarousel;