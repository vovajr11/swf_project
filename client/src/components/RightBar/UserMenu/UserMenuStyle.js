import styled from 'styled-components';

export const UserBox = styled.div`
  height: 90px;
  background-color: #fbc02d;
  margin: 10px;
  border-radius: 10px;
  width: 180px;
  padding: 5px;
  text-align: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LogoutBtn = styled.button`
  background-color: #d32f2f;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
