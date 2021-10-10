import React, { Component } from 'react';
import { connect } from 'react-redux';
import { quizzesOperations, quizzesSelectors } from '../../redux/quizzes';

export class CourseDetailsView extends Component {
  state = {
    currentQuestion: 0,
    showScore: false,
    score: 0,
  };

  nextQuetions() {
    this.setState(prevState => {
      return {
        currentQuestion: prevState.currentQuestion + 1,
      };
    });
  }

  handleAnswerBtnClick = isCorrect => {
    const { currentQuestion } = this.state;
    const questions = this.props.location.state.getQuestions;

    if (isCorrect === true) {
      this.setState(state => {
        return { score: state.score + 1 };
      });
    }

    let nextQuestion = currentQuestion + 1;

    nextQuestion < questions.length
      ? this.nextQuetions()
      : this.setState({ showScore: true });
  };

  render() {
    const { getQuestions } = this.props.location.state;
    const { showScore, score, currentQuestion } = this.state;

    return (
      <div>
        <h1>Course Derails</h1>
        <div className="app">
          {showScore ? (
            <div className="score-section">
              You scored {score} out of {getQuestions.length}
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span> -{' '}
                  {getQuestions.length}
                </div>
                <div className="question-text">
                  {getQuestions[currentQuestion].questionText}
                </div>
              </div>

              <div className="answer-section">
                {getQuestions[currentQuestion].answerOptions.map(
                  answerOptions => (
                    <button
                      onClick={() =>
                        this.handleAnswerBtnClick(answerOptions.isCorrect)
                      }
                    >
                      {answerOptions.answerText}
                    </button>
                  ),
                )}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  getQuestions: quizzesSelectors.getLevel(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailsView);
