import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid_v4 } from 'uuid';
import { quizzesActions, quizzesSelectors } from '../../redux/quizzes/index';
// import { Tag } from '../../components/Global/Styled';
import Answer from '../../components/Global';

export class CourseDetailsView extends Component {
  state = {
    currentQuestion: 0,
    answers: [],
    score: 0,
    disabled: true,
    isEnd: false,
    quizData: this.props.location.state.getQuestions,
    userResponseOneTest: [],
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

  nextQuestion = () => {
    const { score, corectAnswer, userResponseOneTest } = this.state;

    const userAnswer = userResponseOneTest.map(item => item.answer).join(' ');

    // this.props.addUserAnswer(myAnswer); // add userAnswer in state

    if (userAnswer === corectAnswer) {
      this.setState({
        score: score + 1,
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      userResponseOneTest: [],
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { quizData } = this.state;
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          corectAnswer: quizData[this.state.currentQuestion].corectAnswer,
          answers: quizData[this.state.currentQuestion].answers,
        };
      });
    }
  }

  userChooseWord = selectedAnswer => {
    const { userResponseOneTest, answers } = this.state;
    const { id, answer } = selectedAnswer;

    const newAnswers = answers.filter(item => item.id !== id);

    this.setState({
      userResponseOneTest: [...userResponseOneTest, { id, answer }],
      answers: [...newAnswers],
    });
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

  finishHandler = () => {
    const {
      score,
      corectAnswer,
      userResponseOneTest,
      currentQuestion,
      quizData,
    } = this.state;

    if (currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true,
      });
    }

    const userAnswer = userResponseOneTest.map(item => item.answer).join(' ');

    if (corectAnswer === userAnswer) {
      this.setState({
        score: this.state.score + 1,
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
    } = this.state;

    if (isEnd) {
      return <p>Кінець. Ти набрав {score} балів</p>;
    } else {
      return (
        <div>
          <h2>Питання номер {currentQuestion + 1}</h2>
          {answers.length > 0 ? (
            answers.map(item => (
              <li key={item.id} onClick={() => this.userChooseWord(item)}>
                <Answer value="plus" label={item.answer} size={20} />
              </li>
            ))
          ) : (
            <p>Ви вибрали всі слова</p>
          )}

          <ul>
            {userResponseOneTest.length > 0 ? (
              userResponseOneTest.map(item => (
                <li key={item.id} onClick={() => this.deleteSelectedWord(item)}>
                  <Answer value="minus" label={item.answer} size={20} />
                </li>
              ))
            ) : (
              <p>Виберіть слова</p>
            )}
          </ul>

          {currentQuestion < quizData.length - 1 && (
            <button
              className="ui inverted button"
              // disabled={this.state.disabled}
              onClick={this.nextQuestion}
            >
              Next
            </button>
          )}

          {currentQuestion === quizData.length - 1 && (
            <button className="ui inverted button" onClick={this.finishHandler}>
              Finish
            </button>
          )}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  userAnswer: quizzesSelectors.getuserAnswer(state),
});

const mapDispatchToProps = {
  addUserAnswer: quizzesActions.addUserAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailsView);
