import "./Feed.css";
import Share from "../Share/Share";
import Page from "../Pages/Page";
import { posts } from "./../../DummyData";
import { user } from "./../../DummyData";
//import posts from "./../../DummyData";
export default function Feed() {
  const post = [
    {
      id: 1,
      desc: "Love and peace",
      photo: "assets/post/postimg1.png",
      dates: "5 min ago",
      userId: 1,
      like: 32,
      comments: 9,
    },
    {
      id: 2,
      desc: "whatever bro",
      photo: "assets/profile/profileimg2.jpg",
      dates: "2 days ago",
      userId: 2,
      like: 30502,
      comments: 299,
    },
    {
      id: 3,
      desc: "nice day",
      photo: "assets/profile/profileimg3.jpg",
      dates: "50 min ago",
      userId: 3,
      like: 320,
      comments: 19,
    },
    {
      id: 4,
      desc: "hi",
      photo: "assets/profile/profileimg4.webp",
      dates: "55 min ago",
      userId: 4,
      like: 2,
      comments: 9,
    },
  ];

  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share />
        {posts.map(function (el) {
          return <Page key={el.id} post={el} />;
        })}
        {/* <Page />
        <Page />
        <Page />
        <Page />
        <Page /> */}
      </div>
    </div>
  );
}
