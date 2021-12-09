import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as S from './MenuStyle';
import { burgerAction } from '../../../../redux/burgerMenu';

const routes = [
  {
    path: '/courses',
    label: 'Courses',
    exact: true,
  },

  {
    path: '/profile',
    label: 'Propfile',
    exact: true,
  },
];

class Menu extends Component {
  render() {
    const { getBurgerState, openBurger } = this.props;

    return (
      <S.Ul open={getBurgerState}>
        {routes.map(route => (
          <li key={route.path}>
            <S.LinkElem
              exact={route.exact}
              to={route.path}
              onClick={() => (getBurgerState ? openBurger() : '')}
            >
              {route.label}
            </S.LinkElem>
          </li>
        ))}
      </S.Ul>
    );
  }
}

const mapStateToProps = state => ({
  getBurgerState: burgerAction.getBurderState(state),
});

const mapDispatchToProps = {
  openBurger: burgerAction.burderClose,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
