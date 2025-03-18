import "./ProfileRightBar.css";
import OnlineFriends from "../OnlineFriends/OnlineFriends";
import { user } from "./../../DummyData";
import { UseSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { appearer } from "../../store/index";

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
export default function Rightbar(props) {
  const friends = user;
  const dispatch = useDispatch();
  const [image, setImage] = useState("/assets/profile/profileimg3.png");
  const [appear, setAppear] = useState(false);
  function imageChanger(event) {
    setImage("/assets/profile/profileimg1.png");
  }
  function formFiller(event) {
    setAppear(true);
    dispatch(appearer.modalShower());

    props.appear(appear);
    console.log(appear, "rightBar");
  }
  useEffect(() => {
    props.object(image);
  }, [image]);
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="personalInfoKey">
          <h3>abou your self</h3>
          <div className="personalInfo">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ fontSize: "24px", color: "red" }}
            />
            <span className="personalInfoKey">city: </span>
            <span className="personalInfoValue">kansas</span>
          </div>
          <div className="personalInfo">
            <FontAwesomeIcon
              icon={faBirthdayCake}
              style={{ fontSize: "24px", color: "blue" }}
            />
            <span className="personalInfoKey">age: </span>
            <span className="personalInfoValue">kansas</span>
          </div>
          <div className="personalInfo">
            <FontAwesomeIcon
              icon={faBriefcase}
              style={{ fontSize: "24px", color: "blue" }}
            />
            <span className="personalInfoKey">ocupation: </span>
            <span className="personalInfoValue">student</span>
          </div>
        </div>
        <h3>your friends</h3>
        <div className="userFriends">
          <ul className="friendLists">
            {user.map((el) => (
              <li className="lists">
                {<img className="listImages" src={el.profilepicture}></img>}
                {el.name}
              </li>
            ))}
          </ul>
          {/* <ul>
            <li></li>
          </ul> */}
        </div>

        <h4 className="onlineList">Online Friends</h4>
        <ul className="friendListContainer">
          {/* <li className="friendList">
            <div className="imageContainer">
              <img
                src="/assets/profile/profileimg4.webp"
                alt=""
                className="friendListImage"
              />
              <span className="greenOnlineIndicator"></span>
            </div>
            <span className="friendListName">John carter</span>
          </li>
          <li className="friendList">
            <div className="imageContainer">
              <img
                src="/assets/profile/profileimg4.webp"
                alt=""
                className="friendListImage"
              />
              <span className="greenOnlineIndicator"></span>
            </div>
            <span className="friendListName">John carter</span>
          </li>
          <li className="friendList">
            <div className="imageContainer">
              <img
                src="/assets/profile/profileimg4.webp"
                alt=""
                className="friendListImage"
              />
              <span className="greenOnlineIndicator"></span>
            </div>
            <span className="friendListName">John carter</span>
          </li>
          <li className="friendList">
            <div className="imageContainer">
              <img
                src="/assets/profile/profileimg4.webp"
                alt=""
                className="friendListImage"
              />
              <span className="greenOnlineIndicator"></span>
            </div>
            <span className="friendListName">John carter</span>
          </li> */}

          {user.map((el) => (
            <OnlineFriends key={el.id} friends={el}></OnlineFriends>
          ))}
        </ul>
        <ul>
          <li>Change your profile Pic</li>
          <li>
            <FontAwesomeIcon
              onClick={imageChanger}
              icon={faCamera}
              style={{ fontSize: "24px", color: "blue" }}
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faPen}
              style={{ fontSize: "24px", color: "blue" }}
              onClick={formFiller}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
