import React from "react";
//import { Search } from "@mui/icons-material";
import "./Topbar.css";
import { NavLink } from "react-router-dom";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarContainerLeft">
        <span className="logo">social</span>
      </div>
      <div className="topbarContainerMiddle">
        <div className="searchBar">
          S
          <input
            placeholder="search for friends"
            type="text"
            className="searchInput"
          />
        </div>
      </div>

      <div className="topbarContainerRight">
        <div className="topbarLinks">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </NavLink>
          <span className="topbarLink">Home</span>
          <span className="topbarLink">TimeLine</span>
          <a href="/about">profile</a>
        </div>

        <div className="topbarIcon">
          <div className="topBarIconItem">
            P<span className="topbarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            M<span className="topbarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            L<span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/profile/profileimg1.png"
          alt=""
          className="topbarImage"
        />
      </div>
    </div>
  );
}
