import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Box, Image, Heading, Text } from '@chakra-ui/react';
import { quizzesActions, quizzesSelectors } from '../../redux/quizzes/index';

import { quizData } from './components/CompletePuzzle/dataQuestion';
import { testsData } from './components/Tests/data';

export class CourseDetailsView extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <h1>Виберіть завдання</h1>
        <ul>
          <li>
            <Button colorScheme="teal" variant="solid">
              <Link
                to={{
                  pathname: `${match.url}/completePuzzle`,
                  state: { getQuestions: quizData },
                }}
              >
                Complete Puzzle
              </Link>
            </Button>
          </li>

          <li>
            <Button colorScheme="teal" variant="solid">
              <Link
                to={{
                  pathname: `${match.url}/tests`,
                  state: { getQuestions: testsData },
                }}
              >
                Tests
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userAnswer: quizzesSelectors.getuserAnswer(state),
});

const mapDispatchToProps = {
  addUserAnswer: quizzesActions.addUserAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailsView);
