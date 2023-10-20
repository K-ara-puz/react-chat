import { connect } from 'react-redux';
import Header from './Header';
import { openLoginPopup } from '../../store/features/popups';
import { logout } from '../../store/features/auth';

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
        isLoginPopupOpen: state.popups.isLoginPopupOpen
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openLoginPopup: () => dispatch(openLoginPopup()),
        logoutUser: () => dispatch(logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)