import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid_v4 } from 'uuid';
import {
  quizzesActions,
  quizzesSelectors,
} from '../../../../redux/quizzes/index';
import {
  QuizzesWrapper,
  Question,
  NumberQuestion,
  Answer,
  Next,
  Result,
  QuestionInfoItem,
  ViewAnswer,
  UserAnswer,
} from './TestStyled';

import { Button } from '@chakra-ui/react';

export class Tests extends Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false,
    quizData: this.props.location.state.getQuestions,
    currentAnswer: null,
  };

  loadQuizData = () => {
    const { quizData } = this.state;

    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        answer: quizData[this.state.currentQuestion].answer,
        options: quizData[this.state.currentQuestion].options,
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }

  nextQuestion = () => {
    const { myAnswer, answer, score } = this.state;

    this.props.addUserAnswer(myAnswer);

    if (myAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      currentAnswer: null,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { quizData } = this.state;
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[this.state.currentQuestion].question,
          options: quizData[this.state.currentQuestion].options,
          answer: quizData[this.state.currentQuestion].answer,
        };
      });
    }
  }

  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false, currentAnswer: answer });
  };

  finishHandler = () => {
    if (this.state.currentQuestion === this.state.quizData.length - 1) {
      this.setState({
        isEnd: true,
      });
    }

    const { myAnswer } = this.state;

    this.props.addUserAnswer(myAnswer);
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
  };

  render() {
    const {
      options,
      currentAnswer,
      currentQuestion,
      isEnd,
      quizData,
      disabled,
    } = this.state;
    const { userAnswer } = this.props;

    if (isEnd) {
      return (
        <Result>
          <h3>
            Тест закінчився ти набрав {this.state.score} з {quizData.length}{' '}
            балів
          </h3>

          <ul>
            {quizData.map((item, idx) => (
              <QuestionInfoItem
                className="ui floating message options"
                key={idx}
              >
                <div>
                  <h5>{item.question}</h5>
                  <ul>
                    {item.options.map(answer => (
                      <ViewAnswer
                        key={uuid_v4()}
                        className={item.answer === answer ? 'correct' : 'wrong'}
                      >
                        {answer}
                      </ViewAnswer>
                    ))}
                  </ul>
                </div>

                <UserAnswer>
                  Your answer:
                  <span
                    className={
                      item.answer === userAnswer[idx]
                        ? 'correct-answer'
                        : 'wrong-answer'
                    }
                  >
                    {userAnswer[idx]}
                  </span>
                </UserAnswer>
              </QuestionInfoItem>
            ))}
          </ul>
        </Result>
      );
    } else {
      return (
        <QuizzesWrapper>
          <Question>{this.state.questions} </Question>

          <NumberQuestion>{`${currentQuestion + 1} of ${
            quizData.length
          } question `}</NumberQuestion>

          <ul>
            {options.map(option => (
              <Answer
                className={currentAnswer === option ? 'active' : ''}
                key={uuid_v4()}
                onClick={() => this.checkAnswer(option)}
              >
                {option}
              </Answer>
            ))}
          </ul>

          {currentQuestion < quizData.length - 1 && (
            <Next disabled={disabled} onClick={this.nextQuestion}>
              Next
            </Next>
          )}

          {currentQuestion === quizData.length - 1 && (
            <Button colorScheme="teal" size="sm" onClick={this.finishHandler}>
              Finish
            </Button>
          )}
        </QuizzesWrapper>
      );
    }
  }
}

const mapStateToProps = state => ({
  userAnswer: quizzesSelectors.getAllUserAnswer(state),
});

const mapDispatchToProps = {
  addUserAnswer: quizzesActions.addUserAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tests);
