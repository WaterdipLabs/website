import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import './signup.css';

const url = "https://waterdip.us1.list-manage.com/subscribe/post?u=3d60cb63df5a7669b5ba429f2&amp;id=878a0f23b6&amp;f_id=003ec9e5f0%22";
const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    
    const submit = () =>
      email &&
      name &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        NAME: name.value
      });
  
    return (
        <>
      <div
        className='signup-signup'
      > 
        <input
          ref={node => (name = node)}
          type="text"
          placeholder="Full Name"
        />
        <br />
        <input
          ref={node => (email = node)}
          type="email"
          placeholder="Email"
        />
        <br />
        <button onClick={submit}>
          Sign Up
        </button>
        
      </div>
      {status === "sending" && <div className="sending">Sending...</div>}
        {status === "error" && (
          <div
            className="sending"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="sending"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}  
      </>
    );
  };

  
export default function SignUp(props): JSX.Element{
    return(
        <div className="signup">
            <h1>Sign up for product updates: Get new release, product updates. No SPAM</h1>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
            />
        </div>
    )
}