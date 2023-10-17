const User = (props) => {
    return (
        <div className="user">
            <div className="user__avatar">
                <img src={require(`../../assets/users/avatar_template.png`)} alt="" />
            </div>
            <div className="user__info">
                <div className="user__info__fullname">{props.userInfo.name}</div>
                {props.userInfo.followed === true ? <button className="user__info__unfollow-btn" onClick={() => props.unfollowUser(props.userInfo.id)}>Unfollow</button> : <button onClick={() => props.followUser(props.userInfo.id)}>Follow</button>}
            </div>
        </div>
    )
}
export default User;