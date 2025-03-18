import React from "react";
import Modal from "../Modal";
import { useState } from "react";
import DummyData from "./../../DummyData";
import { user } from "./../../DummyData";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { appearer } from "../../store";
export default function Pop(props) {
  const dispatcher = useDispatch();
  const fanum = useSelector((state) => state.appear.show);
  const description = useSelector((state) => state.appear.description);
  console.log(description);
  const [appear, setappear] = useState(true);
  const [name, setName] = useState("");
  const [val, setVal] = useState();
  const [thing, setThing] = useState("");
  // function submitter(event) {
  //   event.preventDefault();
  //   user[0].profilepicture = "assets/ad.png";
  //   setThing("assets/ad.png");
  // }
  function x(v) {
    setappear(v);
    console.log(v, " this is v");
  }
  function nameHandler(event) {
    event.preventDefault();
    //setName(event.target.value);
    // dispatcher(appearer.descriptionChanger(event.target.value));

    console.log(event.target.value);
    //setVal(event.target.value);
  }
  console.log(props.visible, "from the pop");
  console.log(props.visible, appear, "nice thing here");
  const s = props.visible & appear;

  return (
    <div>
      {fanum && (
        <Modal appear={x}>
          <h1>this is it</h1>
          <form>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
            ></input>
            <button>submitt your name</button>
          </form>
        </Modal>
      )}
    </div>
  );
}
