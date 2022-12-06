import React from "react";
import './signup.css';
export default function SignUp(props): JSX.Element{
    return(
        <div className="signup">
            <h1>Get a roundup with product updates, events, and the best blogs every few weeks.</h1>
            <div className="signup-signup">
                <input type="text" placeholder="Full Name"/>
                <input type="text" placeholder="Email"/>
                <button>Sign Up</button>
            </div>
        </div>
    )
}