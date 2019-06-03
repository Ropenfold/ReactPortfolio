import React, { Component } from "react";
import css from "../Contact/contact.module.css";
import EmailForm from '../EmailForm';
import '../../root.css';

class Contact extends Component {
  render() {
    return (
      <>
        <div className={css.totalContainer}>
          <div className={css.firstContainer}>
          <p className={css.contactText}>Contact Me</p>
          <EmailForm /> 
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
