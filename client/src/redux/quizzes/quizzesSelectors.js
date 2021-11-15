import { createSelector } from '@reduxjs/toolkit';

const getLoadingLevel = state => state.quizzes.loading;
const getLevel = state => state.quizzes.quizLevel;
const getuserAnswer = state => state.quizzes.userAnswer;

export default {
  getLoadingLevel,
  getLevel,
  getuserAnswer,
};
