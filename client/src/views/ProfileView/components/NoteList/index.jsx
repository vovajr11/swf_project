import React from 'react';
import { connect } from 'react-redux';
import { noteSelectors } from '../../../../redux/notes/index';
import NoteListItem from './NoteListContainer';

const NoteList = ({ notes }) => {
  return (
    <div>
      {notes.length !== 0 ? (
        <ul>
          {notes.map(({ id }) => (
            <NoteListItem id={id} key={id}/>
          ))}
        </ul>
      ) : (
        <p>Нема нічого</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  notes: noteSelectors.getUserNotes(state),
});

export default connect(mapStateToProps)(NoteList);
