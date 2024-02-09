import "./Popup.css"
import { useState } from "react";

const Popup = () =>{
    const [buttonPopup, setButtonPopup] = useState(true);

    return (
    <>
        <div className="content">
            <img/>
        </div>
    </>
    );
}

export default Popup;