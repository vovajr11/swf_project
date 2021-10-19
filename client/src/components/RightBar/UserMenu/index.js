import React from 'react';
import { connect } from 'react-redux';
import { UserBox } from './UserMenuStyle';
import { authSelectors, authOperations } from '../../../redux/auth';
const UserMenu = ({ name, avatar, onLogout }) => (
  <UserBox>
    <img src={avatar} alt="User Avatar" width="32" />
    <span>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </UserBox>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar:
    'http://vectorlogofree.com/wp-content/uploads/2014/02/30550-batman-logo-silhouette-icon-vector-icon-vector-eps.png',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
