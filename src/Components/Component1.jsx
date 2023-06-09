import React from "react";
import myImage from "../assets/myImage.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';
function LeftComponent() {
    return (
        <div className ="container-One">

            <div className="img">
                <img src={myImage} alt="My Image" />
                
            </div>
            <div className="Refer">
                <h3>Refer and Earn</h3>
                <p>Earn $1 on every merchant referred and withdraw anytime. With surpluswap, it is a win-win</p>
                <FontAwesomeIcon icon={faCircleArrowLeft} />
                <FontAwesomeIcon icon={faCircleArrowRight} />
                
                
            </div>
        </div>
    )
}
export default LeftComponent;
