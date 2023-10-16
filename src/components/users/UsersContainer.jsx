import { connect } from 'react-redux';
import Users from './Users';
import { loadUsers } from '../../store/features/users';

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: (users) => dispatch(loadUsers(users)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)