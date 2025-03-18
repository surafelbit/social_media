import "./Share.css";
import {
  ShoppingCartIcon,
  TagIcon,
  GlobeAltIcon,
  EmojiHappyIcon,
} from "@heroicons/react/solid";
//import { TagIcon } from '@heroicons/react/solid';

export default function Share() {
  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="shareTop">
          <img
            src="/assets/profile/profileimg3.jpg"
            alt=""
            className="imageClass"
          />
          {/* <ShoppingCartIcon className="cart" /> */}
          <input
            className="inputHandler"
            placeholder="please write something"
          />
        </div>
        <hr className="hrClass" />
        <div className="shareBottom">
          <div className="shareoptions">
            <div className="shareoption">
              <ShoppingCartIcon htmlColor="tomato" className="icon" />
              <span className="shareoptiontext">photo or video</span>
            </div>
            <div className="shareoption">
              <TagIcon htmlColor="tomato" className="icon" />
              <span className="shareoptiontext">Tag</span>
            </div>
            <div className="shareoption">
              <GlobeAltIcon htmlColor="blue" className="icon" />
              <span className="shareoptiontext">Location</span>
            </div>
            <div className="shareoption">
              <EmojiHappyIcon htmlColor="tomato" className="icon" />
              <span className="shareoptiontext">Emojis</span>
            </div>
          </div>
          <button className="sharebutton">share</button>
        </div>
      </div>
    </div>
  );
}
