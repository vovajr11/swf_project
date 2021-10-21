const getUserNotes = state => state.notes.items;
const getUserId = state => state.auth.user.id;
const getUserAuthToken = state => state.auth.token;

export default {
  getUserNotes,
  getUserId,
  getUserAuthToken,
};
