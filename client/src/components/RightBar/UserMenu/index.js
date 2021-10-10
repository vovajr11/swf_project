import React from 'react';
import { UserBox } from './UserMenuStyle';

const UserMenu = params => (
  <UserBox>
    <img
      src="http://vectorlogofree.com/wp-content/uploads/2014/02/30550-batman-logo-silhouette-icon-vector-icon-vector-eps.png"
      alt="User Avatar"
      width="32"
    />
    <span>Welcome, User</span>
    <button type="button">Logout</button>
  </UserBox>
);

export default UserMenu;
