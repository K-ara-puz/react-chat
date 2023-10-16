import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import FriendsPanel from "./components/friendsPanel/FriendsPanel";
import { useDispatch } from 'react-redux'
import { authUser } from "./store/features/users";

function App() {
  const dispatch = useDispatch();
  dispatch(authUser())
  return (
    <div className="app">
      <Header></Header>
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
