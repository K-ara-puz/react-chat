import "./App.css";
import Main from "./components/main/Main";
import FriendsPanel from "./components/friendsPanel/FriendsPanel";
import { useDispatch } from "react-redux";
import { authUser } from "./store/features/auth";
import HeaderContainer from "./components/header/HeaderContainer";

function App() {
  const dispatch = useDispatch();
  dispatch(authUser());
  return (
    <div className="app">
      <HeaderContainer></HeaderContainer>
      <div className="app__wrapper">
        <div className="app__wrapper__content">
          <Main></Main>
        </div>
        <div className="app__wrapper__friends-bar">
          <FriendsPanel></FriendsPanel>
        </div>
      </div>
    </div>
  );
}

export default App;
