import React from "react";
import "./Pages.css";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { user } from "./../../DummyData";
export default function Page(props) {
  const [like, setLike] = useState(+props.post.like);
  const [isLiked, setIsLiked] = useState(false);
  function likeHandler(event) {
    // console.log(like);
    // if (isLiked) {
    //   setIsLiked(false);
    // } else {
    //   setIsLiked(true);
    // }
    setIsLiked(!isLiked);

    if (!isLiked) {
      setLike(+props.post.like + 1);
    } else {
      setLike(+props.post.like);
    }
  }
  const users = user.find((el) => el.id === props.post.id);
  const photos = user.find((el) => el.id === props.post.id);
  console.log(users.name);
  console.log(props.post.id);
  return (
    <div className="post">
      <div className="postWrappers">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={photos.profilepicture} alt="" className="postTopImage" />
            <span className="postTopName">{users.name}</span>
            <span className="postTopTime">{props.post.dates}</span>
          </div>
          <div className="postTopRight">
            <ShoppingCartIcon className="toprightimage" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postCenterPost">{props.post.desc}</span>
          <img src={props.post.photo} alt="" className="postCenterImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/heart.png"
              onClick={likeHandler}
              className="likeAndLove"
            ></img>
            <img
              src="/assets/like.png"
              onClick={likeHandler}
              className="likeAndLove"
            ></img>
            <span className="likeNumber">{`${like} people liked this`}</span>
          </div>
          <div className="postBottomRight">
            <span className="comments">{props.post.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
