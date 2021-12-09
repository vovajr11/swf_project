import styled from 'styled-components';

export const QuizzesWrapper = styled.section`
  margin-top: 200px;
  box-shadow: 10px 10px 16px 3px rgb(34 60 80 / 10%);
  border-radius: 8px;
  height: 100%;
  padding: 20px;
  text-align: center;
  width: 500px;

  h2 {
    font-size: 25px;
  }
`;

export const Answers = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;

  li {
    font-size: 20px;

    button {
      border-radius: 5px;
      padding: 20px;
    }
  }
`;

export const UserAnswers = styled.ul`
  display: flex;
  justify-content: center;
  padding: 10px 0;

  li {
    font-size: 20px;
    margin-right: 20px;

    :last-child {
      margin-right: 0;
    }

    button {
      border-radius: 5px;
      padding: 20px;
    }
  }
`;
