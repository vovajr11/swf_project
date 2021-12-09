import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Box, Image, Heading, Text } from '@chakra-ui/react';
import { quizzesActions, quizzesSelectors } from '../../redux/quizzes/index';
import { TestList, TestItem, Title, TestItemImg } from './CourseDetailsStyled';

import { quizData } from './components/CompletePuzzle/dataQuestion';
import { testsData } from './components/Tests/data';

import puzzleImg from '../../img/puzzle-img.png';
import quizImg from '../../img/quiz-img.jpg';

export class CourseDetailsView extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <Title>Виберіть завдання</Title>
        <TestList>
          <TestItem>
            <div>
              <TestItemImg src={puzzleImg} alt="pazzle" width={300} />
            </div>

            <p>Потрібно скласти з набору слів речення</p>
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
          </TestItem>

          <TestItem>
            <div>
              <TestItemImg src={quizImg} alt="pazzle" width={300} />
            </div>

            <p>Вибрати одну правильну відповідь</p>
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
          </TestItem>
        </TestList>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addUserAnswer: quizzesActions.addUserAnswer,
};

export default connect(null, mapDispatchToProps)(CourseDetailsView);
