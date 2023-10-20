import s from './Header.module.scss';
import HeaderAuthUser from './HeaderAuthUser';
import HeaderLogin from './HeaderLogin';
const Header = (props) => {
    return (
        <div className={s.header}>
            {props.isAuth && <button onClick={props.logoutUser} className={s.header__logout}>Logout</button>}
            {props.userId !== null
                ? <HeaderAuthUser userId={props.userId}></HeaderAuthUser>
                : <HeaderLogin openLoginPopup={props.openLoginPopup} isLoginPopupOpen={props.isLoginPopupOpen}></HeaderLogin>}
        </div>
    )
}

export default Header;