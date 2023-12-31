import Posts from "../posts/Posts";
import FriendsPage from "../main/friends/friendsPage";
import UsersContainer from "../users/UsersContainer";
import ProfileContainer from "../profile/ProfileContainer";
import LoginPopupContainer from "../popups/LoginPopupContainer";
import { Routes, Route } from "react-router-dom";
import Preloader from "../preloader/Preloader";
import { Navigate } from 'react-router-dom';

const RoutesNavigator = (props) => {
    return (
        <div>
            {props.isFetching === true ? <Preloader></Preloader> : null}
            <Routes>
                {props.isUserAuth
                    ? <Route path="/" element={<ProfileContainer />}></Route>
                    : <Route path="/" element={<FriendsPage />}></Route>
                }
                <Route path="/profile/:id" element={<ProfileContainer />}></Route>
                <Route path="/posts" element={<Posts />}></Route>
                <Route path="/friends" element={<FriendsPage />}></Route>
                <Route path="/users" element={<UsersContainer />}></Route>
                <Route path="/login" element={<LoginPopupContainer/>}></Route>
            </Routes>
        </div>
    )
}
export const routeTo = (path) => {
    return <Navigate to={path} replace/>;
}
export default RoutesNavigator;