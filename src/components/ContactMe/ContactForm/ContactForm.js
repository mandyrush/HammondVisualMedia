import React from 'react';

const contactForm = () => {
    return (
        <form className="columns is-centered">
            <div className="column is-6">
                <div className="field">
                    <div className="control">
                        <input className="input" type="text" name="name" id="name" />
                    </div>
                    <label className="label" htmlFor="name">Name</label>
                </div>

                <div className="field">
                    <div className="control">
                        <input className="input" type="email" name="email" id="email" />
                    </div>
                    <label className="label" htmlFor="email">Email</label>
                </div>

                <div className="field">
                    <div className="control">
                        <input className="input" type="text" name="subject" id="subject" />
                    </div>
                    <label className="label" htmlFor="subject">Subject</label>
                </div>

                <div className="field">
                    <div className="control">
                        <textarea className="textarea" type="text" name="message" id="message" />
                    </div>
                    <label className="label" htmlFor="message">Message</label>
                </div>

                <div className="field">
                    <div className="control">
                        <button className="button is-rounded is-pulled-right is-info" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default contactForm;