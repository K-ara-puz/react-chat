import s from './Header.module.css';
const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${s.header} ${s.user}`}>
                <img src={require(`../../assets/users/avatars/user5.jpg`)} alt="" />
            </div>
        </div>
    )
}

export default Header;