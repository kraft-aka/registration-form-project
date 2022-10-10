import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h4>{props.values.firstName}'s Info</h4>
        </div>
        <div className="modal-body">
          <p>
            first name: <span>{props.values.firstName}</span>
          </p>
          <p>
            last name: <span>{props.values.lastName}</span>
          </p>
          <p>
            email: <span>{props.values.email}</span>
          </p>
          <p>
            password: <span>{props.values.password}</span>
          </p>
        </div>
        <div className="modal-footer">
          <button className="modal-btn" onClick={props.handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
