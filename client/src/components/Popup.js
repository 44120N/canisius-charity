import React from 'react';
import "./Popup.css";


const Popup = (props) =>{
    

    return (props.trigger) ? (
    <>
        <div className="popup">
            <div className="popup-inner">
                <button className="popup__btn--close" onClick={() => {props.setTrigger(false)}}>OK</button>
                {props.children}
            </div>
        </div>
    </>
    ): "";
}

export default Popup;