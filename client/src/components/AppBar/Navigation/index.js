import React from 'react';
import Burger from './Menu/Burger';
import * as S from './NavigationStyle';

const Navbar = () => {
  return (
    <S.Nav>
      <S.LogoBox>
        <img
          src="http://vectorlogofree.com/wp-content/uploads/2014/02/30550-batman-logo-silhouette-icon-vector-icon-vector-eps.png"
          width={100}
          height={100}
          alt="Logo"
        />
        <h2>Español con amigos</h2>
      </S.LogoBox>
      <Burger />
    </S.Nav>
  );
};

export default Navbar;
