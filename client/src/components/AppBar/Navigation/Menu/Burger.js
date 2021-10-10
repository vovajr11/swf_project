import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Menu from './Menu';
import { burgerAction } from '../../../../redux/burgerMenu';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

class Burger extends Component {
  render() {
    const { getBurgerState, openBurger } = this.props;

    return (
      <>
        <StyledBurger open={getBurgerState} onClick={() => openBurger()}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <Menu open={getBurgerState} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  getBurgerState: burgerAction.getBurderState(state), // get burger state ;)
});

const mapDispatchToProps = {
  openBurger: burgerAction.burderOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
