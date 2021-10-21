import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import noteActions from './noteActions';

const addNote = (state, action) => {
  console.log(action.payload, 'action.payload');
  return [...state, action.payload];
};

const items = createReducer([], {
  [noteActions.fetchNoteSuccess]: (state, action) => action.payload,
  [noteActions.addNoteSuccess]: addNote,
  //   [tasksActions.removeTaskSuccess]: removeTask,
});

export default combineReducers({
  items,
});
