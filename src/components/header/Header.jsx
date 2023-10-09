import s from './Header.module.css';
const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${s.header} ${s.logo}`}></div>
            <div className={`${s.header} ${s.user}`}></div>
        </div>
    )
}

export default Header;