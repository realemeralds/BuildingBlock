import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import MetaMaskLogin from "./MetamaskLogin";
import CloseButton from "react-bootstrap/CloseButton";
import { Link } from "react-router-dom";

const SignInButton = ({ hidden }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="button" hidden={hidden}>
      <button className="signInButton" onClick={handleShow}>
        <p className="signInText">Sign In</p>
      </button>

      <Modal centered size="sm" show={show} onHide={handleClose}>
        <Modal.Body className="d-flex modal-body">
          <CloseButton onClick={() => setShow(false)} />
          <p className="modalHeader">Link your Wallet</p>
          <p className="modalSubheader">
            see <Link to="/level1">this example</Link> for more information
          </p>
          <div className="loginContainer">
            <MetaMaskLogin setShow={setShow} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignInButton;
