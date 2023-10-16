const User = (props) => {
    return (
        <div className="user">
            <div className="user__avatar">
                <img src={require(`../../assets/users/avatar_template.png`)} alt="" />
            </div>
            <div className="user__info">
                <div className="user__info__fullname">{props.userInfo.name}</div>
                <button>Follow</button>
            </div>
        </div>
    )
}
export default User;