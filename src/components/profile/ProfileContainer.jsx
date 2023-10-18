import { connect } from 'react-redux';
import Profile from './Profile';
import { Component } from 'react';

class ProfileContainer extends Component {
    render() {
        return <Profile {...this.props}></Profile>
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, {})(ProfileContainer)