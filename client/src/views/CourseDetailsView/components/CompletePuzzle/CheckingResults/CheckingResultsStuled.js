import styled from 'styled-components';

export const ResultsWrapp = styled.section`
  margin-top: 20px;
  box-shadow: 10px 10px 16px 3px rgb(34 60 80 / 10%);
  border-radius: 8px;
  height: 100%;
  padding: 20px;
  text-align: center;
  width: 600px;

  h2 {
    font-size: 25px;
  }
`;

export const AnswerList = styled.ul`
  border-radius: 5px;
`;

export const AnswerItem = styled.li`
  background-color: #fbc02d;
  margin: 10px;
  padding: 20px 10px;
  border-radius: 10px;
`;

export const AnswerItemCorrect = styled.p`
  margin-bottom: 10px;

  span {
    background-color: #4caf50;
    padding: 5px;
    border-radius: 5px;
  }
`;
export const UserItemAnswer = styled.p`
  span {
    padding: 5px;
    border-radius: 5px;
    &.correct {
      background-color: #4caf50;
    }

    &.wrong {
      background-color: #d32f2f;
    }
  }
`;
