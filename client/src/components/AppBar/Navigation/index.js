import React from 'react';
import Burger from './Menu/Burger';
import * as S from './NavigationStyle';

const Navbar = () => {
  return (
    <S.Nav>
      <S.LogoBox>
        <h2>Español con amigos</h2>
      </S.LogoBox>
      <Burger />
    </S.Nav>
  );
};

export default Navbar;
