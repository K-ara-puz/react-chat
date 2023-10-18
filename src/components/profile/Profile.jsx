import './Profile.scss';
import { useParams } from "react-router-dom";
const Profile = () => {
    let params = useParams();
    return (
        <div className="profile">
            <div className="profile__title">This is profile of user with id:</div>
            <div className="profile__user">{params.id}</div>
        </div>
    )
}

export default Profile;