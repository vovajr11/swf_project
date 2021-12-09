import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Header = styled.header`
  height: 300px;
  width: 310px;
  margin: 150px 100px 150px 10px;
  border-radius: 10px;
  background-color: #fbc02d;
`;

const AppBar = () => (
  <Header>
    <Navigation />
  </Header>
);

export default AppBar;
