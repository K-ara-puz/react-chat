import { connect } from 'react-redux';
import { setIsFetching } from '../../store/features/users';
import Preloader from './Preloader';

const mapStateToProps = (state) => {
    return {
      isFetching: state.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      setIsFetching: (action) => dispatch(setIsFetching(action))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preloader)