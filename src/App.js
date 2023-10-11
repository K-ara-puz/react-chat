import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import FriendsPanel from "./components/friendsPanel/FriendsPanel";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app__wrapper">
        <div className="app__wrapper__content">
          <Navbar></Navbar>
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
