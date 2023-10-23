import './Profile.scss';
const Profile = (props) => {
    return (
        <div className="profile">
            <div className="profile__title">This is profile of user with id:</div>
            <div className="profile__user">{props.userId}</div>
        </div>
    )
}

export default Profile;