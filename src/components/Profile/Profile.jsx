import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import ProfileRightBar from "./../ProfileRightbar/ProfileRightBar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Fragment } from "react";
import Pop from "../PopUp/Pop";
import "./Profile.css";
import { useState, useEffect } from "react";
//import "../Pages/Home";
export default function Profile() {
  const [image, setImage] = useState("/assets/post/postimg5.jpg");
  const xy = "/assets/post/postimg5.jpg";
  const [visib, setvisib] = useState(false);
  useEffect(() => {
    // You could add logic to fetch images dynamically if needed
  }, []);
  function x(d) {
    setImage(d);
  }
  function b(io) {
    console.log(io, "from the filler to the profile");
    setvisib(io);
    console.log(visib);
  }
  return (
    <Fragment>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="ProfileRight">
          <div className="profileRightTop">
            <div className="ProfileCover">
              <img src="/assets/post/OIP.jpg" alt="" className="imageCover" />
              <img src={image} alt="" className="imageUser" />
            </div>
            <div className="profileInfo">
              <h4 className="ProfileInfoName ">my name</h4>
              <span className="description">Description</span>
            </div>
          </div>
          <div className="profileRightBottom">{/*  */}</div>
        </div>
        <div className="profileLeft">
          <ProfileRightBar appear={b} object={x} />
        </div>
      </div>
      <Pop visible={visib}></Pop>
    </Fragment>
  );
}
