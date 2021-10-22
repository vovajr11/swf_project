import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import noteActions from './noteActions';

const addNote = (state, action) => {
  return [...state, action.payload];
};

const removeNote = (state, action) => {
  console.log(action.payload, 'action.payload => remove ID');
  return state.filter(note => note.id !== action.payload);
};

const items = createReducer([], {
  [noteActions.fetchNoteSuccess]: (state, action) => action.payload,
  [noteActions.addNoteSuccess]: addNote,
  [noteActions.removeNoteSuccess]: removeNote,
});

export default combineReducers({
  items,
});
