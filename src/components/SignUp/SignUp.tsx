import React from "react";
import './signup.css';
export default function SignUp(props): JSX.Element{
    return(
        <div className="signup">
            <h1>Sign up for product updates: Get new release, product updates. No SPAM</h1>
            <div className="signup-signup">
                <input type="text" placeholder="Full Name"/>
                <input type="text" placeholder="Email"/>
                <button>Sign Up</button>
            </div>
        </div>
    )
}