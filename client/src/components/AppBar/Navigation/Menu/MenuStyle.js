import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 0;

  li {
    border-radius: 10px;
    margin-bottom: 25px;
    text-align: center;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 1024px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }

  @media (min-width: 1025px) {
    flex-direction: column;
  }
`;

export const LinkElem = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: black;
  transition: 200ms linear;

  &.active {
    transition: 200ms linear;
    background-color: white;
    border-radius: 10px;
    padding: 10px 100px;
  }
`;
