import { createAction } from '@reduxjs/toolkit';

const addNoteRequest = createAction('notes/addRequest');
const addNoteSuccess = createAction('notes/addSuccess');
const addNoteError = createAction('notes/addError');

const fetchNoteRequest = createAction('notes/fetchRequest');
const fetchNoteSuccess = createAction('notes/fetchSuccess');
const fetchNoteError = createAction('notes/fetchError');

const removeNoteRequest = createAction('notes/removeRequest');
const removeNoteSuccess = createAction('notes/removeSuccess');
const removeNoteError = createAction('notes/removeError');

export default {
  addNoteRequest,
  addNoteSuccess,
  addNoteError,

  fetchNoteRequest,
  fetchNoteSuccess,
  fetchNoteError,

  removeNoteRequest,
  removeNoteSuccess,
  removeNoteError,
};
