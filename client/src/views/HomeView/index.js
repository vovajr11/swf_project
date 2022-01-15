import React from 'react';
import styled from 'styled-components';

const Wrapp = styled.div`
  margin-top: 50px;
  text-align: center;

  p {
    font-size: 18px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

const HomeView = params => {
  return (
    <Wrapp>
      <Title>Привіт</Title>
      <p>Ти можеш переглянут свій профіль у вкладці Профіль</p>
      <p>або переглянути курси у вкладці Курси</p>
    </Wrapp>
  );
};

export default HomeView;
