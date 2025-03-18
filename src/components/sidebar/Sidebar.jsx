import "./Sidebar.css";
import { ShoppingCartIcon } from "@heroicons/react/solid";
//import { Bookmark } from "@heroicons/react/solid";
import { BookmarkIcon } from "@heroicons/react/solid"; // For solid style
//import { BookmarkIcon } from "@heroicons/react/outline"; // For outline style
import { user } from "./../../DummyData";
import CloseFriend from "../CloseFriend/CloseFriend";
import {
  UserGroupIcon,
  VideoCameraIcon,
  QuestionMarkCircleIcon,
  BriefcaseIcon,
  CalendarIcon,
  BookOpenIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/solid";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarcontainer">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <ShoppingCartIcon className="icon" />

            <span className="sidebarListitem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="icon" />
            <span className="sidebarListitem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <UserGroupIcon className="icon" />
            <span className="sidebarListitem">Feed</span>
          </li>
          <li className="sidebarListItem">
            {/* <ChatBubbleLeftIconChatBubbleLeftIcon className="icon" /> */}
            <span className="sidebarListitem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <VideoCameraIcon className="icon" />
            <span className="sidebarListitem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <QuestionMarkCircleIcon className="icon" />
            <span className="sidebarListitem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BriefcaseIcon className="icon" />
            <span className="sidebarListitem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <CalendarIcon className="icon" />
            <span className="sidebarListitem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BookOpenIcon className="icon" />
            <span className="sidebarListitem">Feed</span>
          </li>
          {/* <li className="sidebarListItem">
            <ChatBubbleLeftIcon />
            <span className="sidebarListitem">Feed</span>
          </li> */}
        </ul>
        <button className="sidebarButton">show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarfriendlist">
          {/* <li className="sidebarfriend">
            <img
              className="sidebarfriendimg"
              src="/assets/profile/profileimg2.jpg"
              alt=""
            />
            <span className="sidebarfriendname">steve</span>
          </li>
          <li className="sidebarfriend">
            <img
              className="sidebarfriendimg"
              src="/assets/profile/profileimg2.jpg"
              alt=""
            />
            <span className="sidebarfriendname">steve</span>
          </li>
          <li className="sidebarfriend">
            <img
              className="sidebarfriendimg"
              src="/assets/profile/profileimg2.jpg"
              alt=""
            />
            <span className="sidebarfriendname">steve</span>
          </li>
          <li className="sidebarfriend">
            <img
              className="sidebarfriendimg"
              src="/assets/profile/profileimg2.jpg"
              alt=""
            />
            <span className="sidebarfriendname">steve</span>
          </li>
          <li className="sidebarfriend">
            <img
              className="sidebarfriendimg"
              src="/assets/profile/profileimg2.jpg"
              alt=""
            />
            <span className="sidebarfriendname">steve</span>
          </li>
          <li className="sidebarfriend">
            <img
              className="sidebarfriendimg"
              src="/assets/profile/profileimg2.jpg"
              alt=""
            />
            <span className="sidebarfriendname">steve</span>
          </li>
          <li className="sidebarfriend">
            <img
              className="sidebarfriendimg"
              src="/assets/profile/profileimg2.jpg"
              alt=""
            />
            <span className="sidebarfriendname">steve</span>
          </li>
          <li className="sidebarfriend">
            <img
              className="sidebarfriendimg"
              src="/assets/profile/profileimg2.jpg"
              alt=""
            />
            <span className="sidebarfriendname">steve</span>
          </li>
          <li className="sidebarfriend">
            <img
              className="sidebarfriendimg"
              src="/assets/profile/profileimg2.jpg"
              alt=""
            />
            <span className="sidebarfriendname">steve</span>
          </li> */}
          {/* {user.map((el) => (
            <CloseFriend key={user.id} friends={user}></CloseFriend>
          ))} */}
          {user.map(function (el) {
            return <CloseFriend key={el.id} friends={el}></CloseFriend>;
          })}
        </ul>
      </div>
    </div>
  );
}
