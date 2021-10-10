import React from 'react';
import Navigation from './Navigation';
import * as S from './AppBarStyle';

const AppBar = () => (
  <S.Header>
    <Navigation />
    {/* <img src="img/headerPhoto.png" alt="" width={200} /> */}
  </S.Header>
);

export default AppBar;
