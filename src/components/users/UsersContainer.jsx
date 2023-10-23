import { connect } from 'react-redux';
import Users from './Users';
import { loadUsers, setCurrentPage, followUser, unfollowUser, updateUsers } from '../../store/features/users';

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        currentPage: state.users.currentPage,
        pagesCount: state.users.pagesCount,
        isFetching: state.globalState.isFetching,
        isUserAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: () => dispatch(loadUsers()),
        updateUsers: (page) => dispatch(updateUsers(page)),
        setCurrentPage: (page) => dispatch(setCurrentPage(page)),
        followUser: (userId) => dispatch(followUser(userId)),
        unfollowUser: (userId) => dispatch(unfollowUser(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)