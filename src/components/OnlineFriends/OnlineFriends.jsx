//import "./OnlineFriends.css";
import { user } from "./../../DummyData";
export default function OnlineFriends(props) {
  console.log(props.friends);
  return (
    <div>
      <li className="friendList">
        <div className="imageContainer">
          <img
            src={props.friends.profilepicture}
            alt=""
            className="friendListImage"
          />
          <span className="greenOnlineIndicator"></span>
        </div>
        <span className="friendListName">{props.friends.name}</span>
      </li>
    </div>
  );
}
