import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import AppBar from '../AppBar';
import { Wrapp } from './LayoutStyle';

const Layout = ({ children, isAuthenticated }) => (
    <Wrapp>
        {isAuthenticated && <AppBar />}
        {children}
    </Wrapp>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Layout);
