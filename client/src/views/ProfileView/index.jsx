import React, { Component } from 'react';
import { connect } from 'react-redux';
import { noteSelectors, noteOperations } from '../../redux/notes';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList/index.jsx';
import { UserInfo } from './ProfileStyled';

import './tr.css';

class ProfileView extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div>
        <UserInfo>
          <div>
            <img
              src="https://html5css.ru/howto/img_avatar.png"
              alt=""
              width={250}
            />
          </div>
          <div>
            <h2>Name</h2>
            <p>Email</p>
          </div>
        </UserInfo>
        <div>
          <h1>Notes</h1>
          <AddNote />
          <NoteList />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchNotes: noteOperations.fetchNoteForUser,
};

export default connect(null, mapDispatchToProps)(ProfileView);
