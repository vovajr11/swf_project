import React from 'react';
import { quizData } from '../dataQuestion';
import {
  ResultsWrapp,
  AnswerList,
  AnswerItem,
  UserAnswerList,
} from '../CheckingResults/CheckingResultsStuled';

const CheckingResults = props => {
  const { score, userResponses } = props;
  console.log(userResponses, 'userResponses');
  
  return (
    <ResultsWrapp>
      <h2>Набрана кількість балів: {score}</h2>
      <div>
        <AnswerList>
          {quizData.map(({ corectAnswer, answers }) => (
            <AnswerItem>
              <h3>Правильна відповідь: {corectAnswer}</h3>
              <ul>
                {answers.map(({ answer }) => (
                  <li>{answer}</li>
                ))}
              </ul>
            </AnswerItem>
          ))}
        </AnswerList>

        <UserAnswerList>
          {userResponses.map(item => (
            <li>Твоя відповідь: {item}</li>
          ))}
        </UserAnswerList>
      </div>
    </ResultsWrapp>
  );
};

export default CheckingResults;
