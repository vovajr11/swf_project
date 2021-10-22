import { createSelector } from '@reduxjs/toolkit';

const getUserNotes = state => state.notes.items;
const getUserId = state => state.auth.user.id;
const getUserAuthToken = state => state.auth.token;

const getNotesByUserId = createSelector(
  [(_, noteId) => noteId, getUserNotes],
  (noteId, notes) => notes.find(note => note.id === noteId),
);

export default {
  getUserNotes,
  getUserId,
  getNotesByUserId,
  getUserAuthToken,
};
