import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 25px;
  margin: 20px 0;
`;

export const TestList = styled.ul`
  display: flex;
`;
export const TestItem = styled.li`
  margin-right: 50px;
  width: 500px;
  text-align: center;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding: 35px 15px;
  p {
    padding: 5px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin-bottom: 30px;
  }
`;

export const TestItemImg = styled.img`
  height: auto;
`;
