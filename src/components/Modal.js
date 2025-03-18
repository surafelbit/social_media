import ReactDOM from "react-dom";
import "./Modal.css";
import { Fragment } from "react";
import { useState } from "react";
import { appearer } from "../store/index";
import { UseDispatch, useDispatch } from "react-redux";
const port = document.getElementById("modal");
export default function Modal(props) {
  const dispatcher = useDispatch();
  const [appear, setAppear] = useState(true);
  function disappear() {
    dispatcher(appearer.modalShower());
    setAppear(false);
    props.appear(appear);
    console.log(appear);
  }
  function BackDrop(props) {
    return <div onClick={disappear} className="backDrop"></div>;
  }
  function ModalOverLay(props) {
    return <div className="modal">{props.children}</div>;
  }
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop></BackDrop>, port)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        port
      )}
    </Fragment>
  );
}
