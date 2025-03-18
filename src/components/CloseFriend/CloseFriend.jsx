import "./CloseFriend";
import "./CloseFriend.css";

export default function CloseFriend(props) {
  return (
    <div>
      <li className="sidebarfriend">
        <img
          className="sidebarfriendimg"
          src={props.friends.profilepicture}
          alt=""
        />
        <span className="sidebarfriendname">{props.friends.name}</span>
      </li>
    </div>
  );
}
