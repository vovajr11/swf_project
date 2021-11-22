import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import quizzesActions from './quizzesActions';

const addUserAnswer = (state, action) => {
  return [...state, action.payload];
};

const quizLevel = createReducer([], {
  [quizzesActions.fetchQuizzesSuccess]: (state, action) => action.payload,
});

const userAnswer = createReducer([], {
  [quizzesActions.addUserAnswer]: addUserAnswer,
});

const loading = createReducer(false, {
  [quizzesActions.fetchQuizzesRequest]: () => true,
  [quizzesActions.fetchQuizzesSuccess]: () => false,
  [quizzesActions.fetchQuizzesError]: () => false,
});

export default combineReducers({
  quizLevel,
  userAnswer,
  loading,
});
