import { connect } from 'react-redux';
import NoteListItem from './NoteListItem.jsx';
import { noteOperations, noteSelectors } from '../../../../redux/notes/index';

const mapState = (state, { id }) => {
  const note = noteSelectors.getNotesByUserId(state, id);

  return {
    ...note,
  };
};

const mapDispatch = (dispatch, { id }) => ({
  onRemove: () => dispatch(noteOperations.removeNote(id)),
});

export default connect(mapState, mapDispatch)(NoteListItem);
