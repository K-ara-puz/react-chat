import {useNavigate} from 'react-router-dom';
import s from './Header.module.scss';

const HeaderLogin = (props) => {
    
    let navigate = useNavigate();

    let afterClick = () => {
        props.openLoginPopup();
        navigate('/login')
    }
    return (
        <div className={s.header__login}>
            <button onClick={() => afterClick()}>Login</button>
        </div>
    )
}
export default HeaderLogin;