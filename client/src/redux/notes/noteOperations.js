import axios from 'axios';
import notesActions from './noteActions';
import noteSelectors from './noteSelectors';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const addNote = noteData => (dispatch, getState) => {
  const { id } = getState().auth.user;

  dispatch(notesActions.addNoteRequest());

  axios
    .put(`/notes/${id}`, { noteData })
    .then(({ data }) => {
      dispatch(notesActions.addNoteSuccess(noteData));
    })
    .catch(error => dispatch(notesActions.addNoteError(error)));
};

const removeNote = id => dispatch => {
  dispatch(notesActions.removeNoteRequest());

  axios
    .delete(`/notes/${id}`)
    .then(() => dispatch(notesActions.removeNoteSuccess(id)))
    .catch(error => dispatch(notesActions.removeNoteError(error)));
};

const fetchNoteForUser = () => (dispatch, getState) => {
  dispatch(notesActions.fetchNoteRequest());

  axios
    .get('/notes/userNotes')
    .then(({ data }) => {
      dispatch(notesActions.fetchNoteSuccess(data));
    })
    .catch(error => dispatch(notesActions.fetchNoteError(error)));
};

export default {
  addNote,
  removeNote,
  fetchNoteForUser,
};
