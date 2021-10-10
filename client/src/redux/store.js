import { configureStore } from '@reduxjs/toolkit';
import quizzesReducer from './quizzes/quizzesReducer';
import burgerReducer from './burgerMenu/burgerReducer';

const store = configureStore({
  reducer: {
    quizzes: quizzesReducer,
    burger: burgerReducer,
  },
});

export default store;
