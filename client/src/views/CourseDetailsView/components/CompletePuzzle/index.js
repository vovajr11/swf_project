import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  quizzesActions,
  quizzesSelectors,
} from '../../../../redux/quizzes/index';
import CheckingResults from './CheckingResults';
import AnswerItem from '../../../../components/Global';
import { QuizzesWrapper, Answers, UserAnswers } from './CompletePuzzleStyled';
import { Button } from '@chakra-ui/react';

export class CompletePuzzle extends Component {
  state = {
    currentQuestion: 0,
    answers: [],
    score: 0,
    disabled: true,
    isEnd: false,
    quizData: this.props.location.state.getQuestions,
    userResponseOneTest: [],
    userResponsesToEntireTest: [],
  };

  loadQuizData = () => {
    const { quizData } = this.state;

    this.setState(() => {
      return {
        corectAnswer: quizData[this.state.currentQuestion].corectAnswer,
        answers: quizData[this.state.currentQuestion].answers,
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }

  userChooseWord = selectedAnswer => {
    const { userResponseOneTest, answers } = this.state;
    const { id, answer } = selectedAnswer;

    const newAnswers = answers.filter(item => item.id !== id);

    this.setState({
      userResponseOneTest: [...userResponseOneTest, { id, answer }],
      answers: [...newAnswers],
    });

    if (answers.length - 1 === 0) {
      // - 1 because the state is updated later
      this.setState({
        disabled: false,
      });
    }
  };

  deleteSelectedWord = selectedAnswer => {
    const { userResponseOneTest, answers } = this.state;
    const { id, answer } = selectedAnswer;

    const selectedAnswers = userResponseOneTest.filter(item => item.id !== id);

    this.setState({
      userResponseOneTest: [...selectedAnswers],
      answers: [...answers, { id, answer }],
    });
  };

  nextQuestion = () => {
    const {
      score,
      corectAnswer,
      userResponseOneTest,
      userResponsesToEntireTest,
    } = this.state;

    const userAnswer = userResponseOneTest.map(item => item.answer).join(' ');

    this.props.addUserAnswer(userAnswer);

    if (userAnswer === corectAnswer) {
      this.setState({
        score: score + 1,
      });
    }

    this.setState({
      userResponsesToEntireTest: [...userResponsesToEntireTest, userAnswer],
      currentQuestion: this.state.currentQuestion + 1,
      userResponseOneTest: [],
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { quizData } = this.state;

    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState({
        disabled: true,
        corectAnswer: quizData[this.state.currentQuestion].corectAnswer,
        answers: quizData[this.state.currentQuestion].answers,
      });
    }
  }

  finishHandler = () => {
    const {
      score,
      corectAnswer,
      userResponseOneTest,
      userResponsesToEntireTest,
      currentQuestion,
      quizData,
    } = this.state;

    if (currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true,
      });
    }

    const userAnswer = userResponseOneTest.map(item => item.answer).join(' ');

    this.props.addUserAnswer(userAnswer);

    this.setState({
      userResponsesToEntireTest: [...userResponsesToEntireTest, userAnswer],
    });

    if (corectAnswer === userAnswer) {
      this.setState({
        score: score + 1,
      });
    }
  };

  render() {
    const {
      isEnd,
      answers,
      score,
      currentQuestion,
      quizData,
      userResponseOneTest,
      userResponsesToEntireTest,
    } = this.state;

    if (isEnd) {
      return (
        <CheckingResults
          score={score}
          userResponses={userResponsesToEntireTest}
        />
      );
    } else {
      return (
        <QuizzesWrapper>
          <h2>Питання номер {currentQuestion + 1}</h2>
          <Answers>
            {answers.length > 0 ? (
              answers.map(item => (
                <li key={item.id} onClick={() => this.userChooseWord(item)}>
                  <AnswerItem value="plus" label={item.answer} size={20} />
                </li>
              ))
            ) : (
              <p>Ви вибрали всі слова</p>
            )}
          </Answers>

          {answers.length > 0 ? <hr /> : ''}

          <UserAnswers>
            {userResponseOneTest.length > 0 ? (
              userResponseOneTest.map(item => (
                <li key={item.id} onClick={() => this.deleteSelectedWord(item)}>
                  <AnswerItem value="minus" label={item.answer} size={20} />
                </li>
              ))
            ) : (
              <p>Виберіть слова</p>
            )}
          </UserAnswers>

          {userResponseOneTest.length > 0 ? <hr /> : ''}

          {currentQuestion < quizData.length - 1 && (
            <Button
              colorScheme="blue"
              disabled={this.state.disabled}
              onClick={this.nextQuestion}
            >
              Next
            </Button>
          )}

          {currentQuestion === quizData.length - 1 && (
            <button className="ui inverted button" onClick={this.finishHandler}>
              Finish
            </button>
          )}
        </QuizzesWrapper>
      );
    }
  }
}

const mapDispatchToProps = {
  addUserAnswer: quizzesActions.addUserAnswer,
};

export default connect(null, mapDispatchToProps)(CompletePuzzle);
