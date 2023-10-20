import { useNavigate } from 'react-router-dom';
import './LoginPopup.scss';
import LoginForm from '../forms/LoginForm';
const LoginPopup = (props) => {
    const navigate = useNavigate();

    let closeForm = () => {
        props.closeLoginPopup();
        navigate(-1);
    }
    return (
        <div className="login">
            <div className="login__popup">
                <div className="login__popup__title">
                    <div className="login__popup__title__text">Login Form</div>
                    <button className="login__popup__title__close" onClick={closeForm}>🗙</button>
                </div>
                <LoginForm></LoginForm>
            </div>
        </div>
    )
}
export default LoginPopup;