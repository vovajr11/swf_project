import axios from 'axios';
import quizzesActions from './quizzesActions';

const fetchQuizzes = () => dispatch => {
  dispatch(quizzesActions.fetchQuizzesRequest());

  // axios
  //   .get('/users')
  //   .then(({ data }) => dispatch(quizzesActions.fetchQuizzesSuccess(data)))
  //   .catch(error => dispatch(quizzesActions.fetchQuizzesError(error)));
};

const fetchQuizDetails = () => dispatch => {
  dispatch(quizzesActions.fetchQuizDetailsRequest());

  axios
    .get('/quizzes')
    .then(({ data }) => dispatch(quizzesActions.fetchQuizDetailsSuccess(data)))
    .catch(error => dispatch(quizzesActions.fetchQuizDetailsError(error)));
};

export default {
  fetchQuizzes,
  fetchQuizDetails,
};
