import './Main.scss';
import Profile from "../profile/Profile";
import { Routes, Route } from "react-router-dom";
import Posts from '../posts/Posts';
import FriendsPage from './friends/friendsPage';
import UsersContainer from '../users/UsersContainer';
import Navbar from '../navbar/Navbar';

const Main = () => {
    return (
        <div className='main'>
            <Navbar></Navbar>
            <div className="main__content">
                <Routes>
                    <Route path="/" element={<Profile />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/posts" element={<Posts testProp={'ttttt'}/>}></Route>
                    <Route path="/friends" element={<FriendsPage/>}></Route>
                    <Route path="/users" element={<UsersContainer/>}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default Main;
