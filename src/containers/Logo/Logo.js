import React, {Component} from 'react';

import classes from './Logo.module.css';
import LogoMain from '../../assets/images/logo.gif';
import LogoCrosshair from '../../assets/images/logo_and_crosshair.gif';

class Logo extends Component {
    state = {
        logoSrc: LogoMain
    };

    onLogoHoverEnterHandler = () => {
        this.setState({
            logoSrc: LogoCrosshair
        })
    }

    onLogoHoverLeaveHandler = () => {
        this.setState({
            logoSrc: LogoMain
        })
    }

    render() {
        return (
            <a href="/">
                <img 
                    onMouseOver={this.onLogoHoverEnterHandler}
                    onMouseLeave={this.onLogoHoverLeaveHandler}
                    src={this.state.logoSrc} 
                    alt="Hammond Visual Media Logo" 
                    className={classes.Logo}/>
            </a>
        );
    }
}

export default Logo;