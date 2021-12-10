import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { noteSelectors, noteOperations } from '../../redux/notes';
import AddNote from './components/AddNote/index';
import NoteList from './components/NoteList';
import {
  UserProfile,
  UserInfo,
  UserData,
  UserPhoto,
  UserName,
  UserMail,
  NotesWrapp,
} from './ProfileStyled';

class ProfileView extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { username, email } = this.props.userInfo;
    return (
      <UserProfile>
        <UserInfo>
          <div>
            <UserPhoto
              src="https://html5css.ru/howto/img_avatar.png"
              alt=""
              width={250}
            />
          </div>

          <UserData>
            <UserName>{username}</UserName>
            <UserMail>{email}</UserMail>
          </UserData>
        </UserInfo>
        <h3>Твої нотатки</h3>
        <NotesWrapp>
          <AddNote />
          <NoteList />
        </NotesWrapp>
      </UserProfile>
    );
  }
}


const mapStateToProps = state => ({
  userInfo: authSelectors.getUserInfo(state),
});

const mapDispatchToProps = {
  fetchNotes: noteOperations.fetchNoteForUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
