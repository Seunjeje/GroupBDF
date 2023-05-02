import React from "react";
import Button from './Button';

import "./Component2.css";
function RightComponent() {
    function handleClick() {
        console.log('Button clicked');
    }

    return (
        <div className="container-Two">
            <div className="Button-One">
                <Button label="Create Account" onClick={handleClick} />
            </div>

            <div className="Sign-In">
                <h4>Sign in</h4>
                <h5>Welcome Back!</h5>
                <p>Sign in and enjoy zero service charge on all your transaction</p>

                <div className="form-group">
                    <input type="text" className="form-control" id="firstName" placeholder="enter your email" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" id="firstName" placeholder="enter your password" />
                </div>

                <p>Forget your password? <strong>Reset</strong></p>
                <div className ="Button-Two">
                    <Button label="Sign In" onClick={handleClick} />
                </div>
            </div>
        </div>

    )
}
export default RightComponent;

