import { createAction } from '@reduxjs/toolkit';

const fetchQuizzesRequest = createAction('quizzes/fetchQuizzesRequest');
const fetchQuizzesSuccess = createAction('quizzes/fetchQuizzesSuccess');
const fetchQuizzesError = createAction('quizzes/fetchQuizzesError');

const addUserAnswer = createAction('quizzes/addUserAnswer');

const fetchQuizDetailsRequest = createAction('quizzes/fetchQuizDetailsRequest');
const fetchQuizDetailsSuccess = createAction('quizzes/fetchQuizDetailsSuccess');
const fetchQuizDetailsError = createAction('quizzes/fetchQuizDetailsError');

export default {
  fetchQuizzesRequest,
  fetchQuizzesSuccess,
  fetchQuizzesError,
  addUserAnswer,
  fetchQuizDetailsRequest,
  fetchQuizDetailsSuccess,
  fetchQuizDetailsError,
};
