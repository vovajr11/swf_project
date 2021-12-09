import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapp = styled.div`
  text-align: center;
  width: 500px;
  margin: auto;
  padding: 200px 0;

  a {
    background-color: #4caf50;
    padding: 10px 0;
    display: block;
    width: 180px;
    margin: auto;
    color: white;
    border-radius: 10px;
  }
`;

class VerificationView extends Component {
  render() {
    return (
      <Wrapp>
        <h2>Вам надіслано лист на електронну пошту для верифікації акаунту</h2>
        <a href="https://www.google.com/gmail/">Перейдіть на пошту</a>
      </Wrapp>
    );
  }
}

export default VerificationView;
