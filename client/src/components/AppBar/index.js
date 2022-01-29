import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

const Header = styled.header`
    height: 300px;
    width: 310px;
    margin: 150px 100px 150px 10px;
    border-radius: 10px;
`;

const AppBar = () => (
    <Header>
        <UserMenu />
        <Navigation />
    </Header>
);

export default AppBar;
