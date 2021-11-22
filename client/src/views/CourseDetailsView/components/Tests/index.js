import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid_v4 } from 'uuid';
import {
  quizzesActions,
  quizzesSelectors,
} from '../../../../redux/quizzes/index';

export class Tests extends Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false,
    quizData: this.props.location.state.getQuestions,
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
    this.setState({ myAnswer: answer, disabled: false });
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
    const { options, myAnswer, currentQuestion, isEnd, quizData } = this.state;
    const { userAnswer } = this.props;

    if (isEnd) {
      return (
        <div className="result">
          <h3>Game Over your Final score is {this.state.score} points </h3>
          <div style={{ display: 'flex' }}>
            <ul>
              {quizData.map((item, idx) => (
                <li className="ui floating message options" key={idx}>
                  <h5>{item.question}</h5>
                  <ul>
                    {item.options.map(item => (
                      <li key={uuid_v4()}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <ul>
              {userAnswer.map((item, idx) => (
                <li key={idx}>My Answer: {item}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{this.state.questions} </h1>

          <span>{`Questions ${currentQuestion}  out of ${
            quizData.length - 1
          } remaining `}</span>

          {options.map(option => (
            <p key={uuid_v4()} onClick={() => this.checkAnswer(option)}>
              {option}
            </p>
          ))}

          {currentQuestion < quizData.length - 1 && (
            <button
              className="ui inverted button"
              disabled={this.state.disabled}
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

export default connect(mapStateToProps, mapDispatchToProps)(Tests);
