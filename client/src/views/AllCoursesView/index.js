import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { quizzesOperations, quizzesSelectors } from '../../redux/quizzes';
import { authSelectors } from '../../redux/auth';
import courseData from './db.json';
import { Wrapp, Title } from './styled';
import { Button, Box, Image, Heading, Text } from '@chakra-ui/react';
import courseImg from '../../img/courseImg.png';

class AllCoursesView extends Component {
  render() {
    const { allQuiz, match, userInfo } = this.props;

    return (
      <Wrapp>
        <Title>Всі курси</Title>

        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
          flexWrap="wrap"
          width="100%"
        >
          {courseData.map(({ courseName, descr, url }) => (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              mb="10"
            >
              <Image src={courseImg} alt="courseImg" width={382} />
              <Box ml={3}>
                <Heading fontSize="xl" mt={2}>
                  {courseName}
                </Heading>
                <Text mt={2}>{descr}</Text>
              </Box>

              <Box textAlign="center" mt={4} mb={4}>
                <Button colorScheme="teal" variant="solid">
                  <Link
                    to={{
                      pathname: `${match.url}/${url}`,
                    }}
                  >
                    Перейти
                  </Link>
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Wrapp>
    );
  }
}

const mapStateToProps = state => ({
  allQuiz: quizzesSelectors.getLevel(state),
  userInfo: authSelectors.getUserInfo(state),
});

const mapDispatchToProps = {
  onFetchQuizzes: quizzesOperations.fetchQuizzes,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCoursesView);
