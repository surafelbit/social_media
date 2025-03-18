import "./Rightbar.css";
import OnlineFriends from "../OnlineFriends/OnlineFriends";
import { user } from "./../../DummyData";
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImage" src="/assets/gifts.png"></img>
          <span className="birthdayText">
            <b>Diane</b> and <b> 3 others </b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" className="advert"></img>
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
      </div>
    </div>
  );
}
