import { createSelector } from '@reduxjs/toolkit';

const getLoadingLevel = state => state.quizzes.loading;
const getLevel = state => state.quizzes.quizLevel;

export default {
  getLoadingLevel,
  getLevel,
};
