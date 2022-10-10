import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import "./Styles.css";

const RegisterForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

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
    if (values.firstName && values.lastName && values.email && values.password) {
      setIsValid(true)
    setSubmitted(true)
    handleModal();
    
    }
  };

  // handle modal state
  const handleModal = () => {
    setShowModal(true);
  };

  // handle close modal
  const handleClose = () => {
    setShowModal(false);
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  // to pause submit *** need to fix it
  useEffect(()=> {
    setTimeout(()=>{
      handleSubmit()
    }, 2000)
  }, [])

  return (
    <div className="form-container">
      {showModal && submitted && isValid ?(
        <Modal
          showModal={showModal}
          values={values}
          handleClose={handleClose}
        />
      ): null}
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          // disabled={submitted}
          value={values.firstName}
          type="text"
          id="firstName"
          placeholder="first name"
          onChange={handleFirstNameValue}
          
        />
        {/* {!submitted && !values.firstName ? <span className="warn">Please type your first name</span> : null} */}
        <input
          // disabled={submitted}
          value={values.lastName}
          type="text"
          id="lastName"
          placeholder="last name"
          onChange={handleLastNameValue}
          
        />
        <input
          // disabled={submitted}
          value={values.email}
          type="email"
          id="email"
          placeholder="email"
          onChange={handleEmailValue}
        
        />
        <input
          // disabled={submitted}
          value={values.password}
          type="password"
          id="password"
          placeholder="password"
          onChange={handlePasswordValue}
          
        />
        <input type="submit" id="button" className="submitButton" />
      </form>
    </div>
  );
};

export default RegisterForm;
