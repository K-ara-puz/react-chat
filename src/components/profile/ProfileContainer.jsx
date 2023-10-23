import { connect } from 'react-redux';
import Profile from './Profile';
import { Component } from 'react';
import WithAuth from '../hocs/withAuth';

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

const withAuthProfileContainer = WithAuth(ProfileContainer);

export default connect(mapStateToProps, {})(withAuthProfileContainer)