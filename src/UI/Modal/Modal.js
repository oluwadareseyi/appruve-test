import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
/**
 * @function Modal
 * @param  {Boolean} props
 *
 */
const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop hide={props.hide} show={props.show} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
