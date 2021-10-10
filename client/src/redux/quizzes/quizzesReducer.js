import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import quizzesActions from './quizzesActions';

// const initState = {
//   question_item: [],
// };

// const addQuestions = (state, action) => {
//   return { ...state, question_item: action.payload };
// };

const quizLevel = createReducer([], {
  [quizzesActions.fetchQuizzesSuccess]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [quizzesActions.fetchQuizzesRequest]: () => true,
  [quizzesActions.fetchQuizzesSuccess]: () => false,
  [quizzesActions.fetchQuizzesError]: () => false,
});

export default combineReducers({
  quizLevel,
  loading,
});
