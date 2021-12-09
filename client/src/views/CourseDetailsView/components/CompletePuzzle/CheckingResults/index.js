import React from 'react';
import { connect } from 'react-redux';
import { quizzesSelectors } from '../../../../../redux/quizzes/index';
import { quizData } from '../dataQuestion';
import {
  ResultsWrapp,
  AnswerList,
  AnswerItem,
  AnswerItemCorrect,
  UserItemAnswer,
} from '../CheckingResults/CheckingResultsStuled';

const CheckingResults = props => {
  const { score, userAnswer } = props;

  return (
    <ResultsWrapp>
      <h2>Набрана кількість балів: {score}</h2>

      <AnswerList>
        {quizData.map((quizItem, idx) => (
          <AnswerItem>
            <AnswerItemCorrect>
              Правильна відповідь: <span>{quizItem.corectAnswer}</span>
            </AnswerItemCorrect>
            <UserItemAnswer>
              Твоя відповідь:{' '}
              <span
                className={
                  quizItem.corectAnswer === userAnswer[idx]
                    ? 'correct'
                    : 'wrong'
                }
              >
                {userAnswer[idx]}
              </span>
            </UserItemAnswer>
          </AnswerItem>
        ))}
      </AnswerList>
    </ResultsWrapp>
  );
};

const mapStateToProps = state => ({
  userAnswer: quizzesSelectors.getAllUserAnswer(state),
});

export default connect(mapStateToProps)(CheckingResults);
