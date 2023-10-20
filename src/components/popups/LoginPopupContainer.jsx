import { connect } from 'react-redux';
import { Component } from 'react';
import LoginPopup from './LoginPopup';
import { closeLoginPopup } from '../../store/features/popups';
import { login } from '../../store/features/auth';

class LoginPopupContainer extends Component {
    render() {
        return <LoginPopup {...this.props}></LoginPopup>
    }
}

const mapStateToProps = (state) => {
    return {
        isloginPopupOpen: state.popups.isLoginPopupOpen
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        closeLoginPopup: () => dispatch(closeLoginPopup()),
        loginUser: (data) => dispatch(login(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopupContainer)