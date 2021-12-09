import styled from 'styled-components';

export const QuizzesWrapper = styled.section`
  margin-top: 200px;
  box-shadow: 10px 10px 16px 3px rgba(34, 60, 80, 0.1);
  border-radius: 8px;
  height: 100%;
  padding: 20px;
  text-align: center;
`;

export const Question = styled.h2`
  font-size: 30px;
`;

export const NumberQuestion = styled.p`
  width: 120px;
  padding: 5px;
  background-color: #ffeb3b;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 14px;
`;

export const Answer = styled.li`
  background-color: #fbc02d;
  width: 200px;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 10px;
  font-size: 20px;
  padding: 5px 0;

  &.active {
    background-color: #f57c00;
  }
`;

export const Next = styled.button`
  background-color: #ff9800;
  border: none;
  color: white;
  padding: 5px 30px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;


export const Result = styled.section`
  margin-top: 50px;
  box-shadow: 10px 10px 16px 3px rgb(34 60 80 / 10%);
  border-radius: 8px;
  height: 100%;
  padding: 20px;
  text-align: center;

  h3 {
    font-size: 30px;
  }
`;

export const QuestionInfoItem = styled.li`
  background-color: #ffeb3b;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const ViewAnswer = styled.li`
  padding: 5px 0;
  border-radius: 10px;
  width: 130px;
  margin: auto;
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0;
  }

  &.correct {
    background-color: #4caf50;
  }
  &.wrong {
    background-color: #d32f2f;
  }
`;

export const UserAnswer = styled.p`
  span {
    display: block;
    padding: 5px 0;
    border-radius: 10px;
    width: 130px;

    &.correct-answer {
      background-color: #4caf50;
    }
    &.wrong-answer {
      background-color: #d32f2f;
    }
  }
`;
