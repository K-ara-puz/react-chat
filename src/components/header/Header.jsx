import s from './Header.module.scss';
import HeaderAuthUser from './HeaderAuthUser';
import HeaderLogin from './HeaderLogin';
const Header = (props) => {
    return (
        <div className={s.header}>
            {props.userId !== null ? <HeaderAuthUser userId={props.userId}></HeaderAuthUser> : <HeaderLogin></HeaderLogin>}
        </div>
    )
}

export default Header;