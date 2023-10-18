import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
    return {
      authUserId: state.auth.userId,
    }
}

export default connect(mapStateToProps, {})(Navbar)