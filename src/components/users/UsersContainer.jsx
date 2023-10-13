import { connect } from 'react-redux';
import Users from './Users';
import { increment, loadUsers } from '../../store/features/users';

const mapState = (state) => {
    return {
        posts: state.posts,
        users: state.users
    }
}
const mapDispatch = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        loadUsers: () => {
            // console.log("EEEEEEEEE")
            dispatch(loadUsers())
        }
    }
}

export default connect(mapState, mapDispatch)(Users)