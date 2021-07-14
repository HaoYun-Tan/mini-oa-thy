import React from 'react';
import {Button} from "react-bootstrap";
import './LoginCard.css';

function LoginCard(){
    return (
        <div className = 'LoginCard'>
            <div className = 'LoginCard-Left'></div>

            <div className = "LoginCard-Right">
                <div className = "LoginCard-Right-Top">
                        <p>Login</p>
                </div>
            </div>

        </div>
    );
}

export default LoginCard;