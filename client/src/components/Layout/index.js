import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import AppBar from '../AppBar';
import { Wrapp } from './LayoutStyle';
import UserMenu from '../RightBar/UserMenu';

const Layout = ({ children, isAuthenticated }) => (
  <Wrapp>
    <AppBar />
    {children}
    {isAuthenticated && <UserMenu />}
  </Wrapp>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Layout);
