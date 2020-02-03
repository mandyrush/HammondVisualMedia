import React, { useState } from 'react';

import classes from './Logo.module.css';
import LogoMain from '../../../../assets/images/logo.gif';
import LogoCrosshair from '../../../../assets/images/logo_and_crosshair.gif';

const Logo = () => {
    const [logoSrc, setLogoSrc] = useState(LogoMain);

    const onLogoHoverEnterHandler = () => {
        setLogoSrc(LogoCrosshair);
    }

    const onLogoHoverLeaveHandler = () => {
        setLogoSrc(LogoMain);
    }

    return (
        <a href="/">
            <img 
                onMouseOver={onLogoHoverEnterHandler}
                onMouseLeave={onLogoHoverLeaveHandler}
                src={logoSrc} 
                alt="Hammond Visual Media Logo" 
                className={classes.Logo}/>
        </a>
    );
}

export default Logo;