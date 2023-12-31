import { NavLink } from "react-router-dom";

const User = (props) => {
    return (
        <div className="user">
            <NavLink to={`/profile/${props.userInfo.id}`}>
                <div className="user__avatar">
                    {props.userInfo.photos.small
                        ? <img src={props.userInfo.photos.small} alt=""/>
                        : <img src={require(`../../assets/users/avatar_template.png`)} alt="" />}
                </div>
            </NavLink>
            <div className="user__info">
                <div className="user__info__fullname">{props.userInfo.name}</div>
                    {props.userInfo.followed === true
                        ? <button disabled={!props.isUserAuth ? true : false} className="user__info__unfollow-btn" onClick={() => props.unfollowUser(props.userInfo.id)}>Unfollow</button>
                        : <button disabled={!props.isUserAuth ? true : false} onClick={() => props.followUser(props.userInfo.id)}>Follow</button>}
            </div>
        </div>
    )
}
export default User;