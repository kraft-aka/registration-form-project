import React, { useState } from "react";
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
  const [valid, setValid] = useState(true);

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
    handleModal();
  };

  // handle modal state
  const handleModal = () => {
    setShowModal(true);
  };

  // handle close modal
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="form-container">
      {showModal && (
        <Modal
          showModal={showModal}
          values={values}
          handleClose={handleClose}
        />
      )}
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={values.firstName}
          type="text"
          id="firstName"
          placeholder="first name"
          onChange={handleFirstNameValue}
        />
        {!valid ? <p className="warn">Please type your first name</p> : null}
        <input
          value={values.lastName}
          type="text"
          id="lastName"
          placeholder="last name"
          onChange={handleLastNameValue}
        />
        <input
          value={values.email}
          type="email"
          id="email"
          placeholder="email"
          onChange={handleEmailValue}
        />
        <input
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
