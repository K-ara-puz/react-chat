import { connect } from 'react-redux';
import Users from './Users';
import { loadUsers, setPagesCount, setCurrentPage, followUser, setIsFetching } from '../../store/features/users';

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        currentPage: state.users.currentPage,
        pagesCount: state.users.pagesCount,
        elemsOnPage: state.users.elemsOnPage,
        isFetching: state.users.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: (users) => dispatch(loadUsers(users)),
        setPagesCount: (pagesCount) => dispatch(setPagesCount(pagesCount)),
        setCurrentPage: (page) => dispatch(setCurrentPage(page)),
        followUser: (action) => dispatch(followUser(action)),
        setIsFetching: (action) => dispatch(setIsFetching(action))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)