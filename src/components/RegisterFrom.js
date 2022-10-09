import React, { useState } from "react";
import "./Styles.css";

const RegisterForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleFirstNameValue = (e) => {
    setValues({
      ...values,
      firstName: e.target.value,
    });
  };

  const handleLastNameValue = (e) => {
    setValues({
      ...values,
      lastName: e.target.value,
    });
  };

  const handleEmailValue = (e) => {
    setValues({
      ...values,
      email: e.target.value,
    });
  };

  const handlePasswordValue = (e) => {
    setValues({
      ...values,
      password: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('registered')
  }
  

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="firstName" placeholder="first name" onChange={handleFirstNameValue}/>
        <input type="text" id="lastName" placeholder="last name" onChange={handleLastNameValue} />
        <input type="email" id="email" placeholder="email" onChange={handleEmailValue}/>
        <input type="password" id="password" placeholder="password" onChange={handlePasswordValue} />
        <input type="submit" id="button" className="submitButton"/>
      </form>
    </div>
  );
};

export default RegisterForm;
