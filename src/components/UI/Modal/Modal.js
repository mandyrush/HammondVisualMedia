import React from 'react';

const modal = (props) => {
    let classList = ['modal'];

    if(props.open) {
        classList = ['modal is-active'];
    }

    return(
        <div className={classList}>
            <div 
                className="modal-background"
                onClick={props.close} >
            </div>
            <div className="modal-content">
                {props.children}
            </div>
            <button 
                className="modal-close is-large" 
                aria-label="close"
                onClick={props.close} >
            </button>
        </div>
    );
}

export default modal;