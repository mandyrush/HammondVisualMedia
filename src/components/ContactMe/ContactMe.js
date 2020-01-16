import React from 'react';

import classes from './ContactMe.module.css';
import ContactForm from '../ContactMe/ContactForm/ContactForm';

const contactMe = () => {
    return (
        <div className={classes.ContactMe} id="ContactMe">
            <h2 className="subtitle is-3">Contact Me</h2>
            <ContactForm />
        </div>
    );
}

export default contactMe;