import React, {useState} from 'react';
import css from "./emailForm.module.css";
import NetlifyForm from 'react-netlify-form';

const EmailForm = () => {
    let[name, setName] = useState("");
    let[emailAddress, setEmailAddress] = useState("");
    let[message, setMessage] = useState("");

    const handleName = (event) => {
        const {value} = event.target
        setName(value);
    }

    const handleEmailAddress = (event) => {
        const { value } = event.target
        setEmailAddress(value);
    }

    const handleMessage = (event) => {
        const { value } = event.target
        setMessage(value);
    }

    return(
        <>
            <div className={css.formContainer}>
                <form name="contact" method="post">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>,
            </div>
               
       </> 
    )

}

export default EmailForm;

{/* <NetlifyForm name='Contact Form'>
                    {({ loading, error, success }) => (
                        <div>
                            {loading &&
                                <div>Loading...</div>
                            }
                            {error &&
                                <div>Your information was not sent. Please try again later.</div>
                            }
                            {success &&
                                <div>Thank you for contacting us!</div>
                            }
                            {!loading && !success &&
                                <div className={css.form}>
                                <div className={css.nameContainer}><p>name:</p>
                                    <input className={css.name} type='text' name='Name' required />
                                </div>
                            <div className={css.emailContainer}><p>email:</p>
                                    <input className={css.email} type='text' name='email' required />
                            </div>
                                    <div className={css.messageContainer}><p>write your message here:</p>
                                    <textarea className={css.message} name='Message' required />
                                    </div>
                                    <div className={css.buttonContainer}>
                                    <button className={css.button}>Submit</button>
                                    </div>
                                </div>
                            }
                        </div>
                    )}
                </NetlifyForm> */}