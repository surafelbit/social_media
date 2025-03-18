import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Rightbar from "./components/rightbar/Rightbar";
import Feed from "./components/feed/Feed";
import Profile from "./components/Profile/Profile";
import Pop from "./components/PopUp/Pop";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Profile />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <Pop></Pop> */}
      {/* <Profile /> */}
      {/* <Home /> */}
      {/* <Person /> */}
    </Fragment>
  );
}

export default App;
