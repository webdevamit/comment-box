import React from "react";
import "./Modal.css";

const renderContent = (props) => {
  return <div className="modal">{props.children}</div>;
};

const Modal = (props) => {
  return props.open === true ? renderContent(props) : null;
};

export default Modal;
