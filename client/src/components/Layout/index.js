import React from 'react';
import AppBar from '../AppBar';
import { Wrapp } from './LayoutStyle';
import UserMenu from '../RightBar/UserMenu';

const Layout = ({ children }) => (
  <Wrapp>
    <AppBar />
    {children}
    <UserMenu />
  </Wrapp>
);

export default Layout;
