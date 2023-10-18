import "./Main.scss";
import { Routes, Route } from "react-router-dom";
import Posts from "../posts/Posts";
import FriendsPage from "./friends/friendsPage";
import UsersContainer from "../users/UsersContainer";
import ProfileContainer from "../profile/ProfileContainer";
import NavbarContainer from "../navbar/NavbarContainer";

const Main = () => {
  return (
    <div className="main">
      <NavbarContainer></NavbarContainer>
      <div className="main__content">
        <Routes>
          <Route path="/" element={<ProfileContainer />}></Route>
          <Route path="/profile/:id" element={<ProfileContainer />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/friends" element={<FriendsPage />}></Route>
          <Route path="/users" element={<UsersContainer />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Main;