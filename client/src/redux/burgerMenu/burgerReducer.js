import { createReducer } from '@reduxjs/toolkit';
import burgerAction from './burgerAction';

const openBurger = createReducer(false, {
  // [burderOpen]: () => true,
  [burgerAction.burderOpen]: (state, action) => !state,
  [burgerAction.burderClose]: () => false,
});

export default openBurger;
