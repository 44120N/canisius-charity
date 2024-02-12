import React from 'react';
import "./Popup.css";


const Popup = (props) =>{
    

    return (props.trigger) ? (
    <>
        <div className="popup">
            <div className="popup-inner">
                {props.children}
                <div className='center'>
                    <button className="popup__btn--close" onClick={() => {props.setTrigger(false)}}><strong>OK</strong></button>
                </div>
            </div>
        </div>
    </>
    ): "";
}

export default Popup;