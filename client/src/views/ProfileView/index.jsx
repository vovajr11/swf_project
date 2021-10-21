import React, { Component } from 'react';
import { connect } from 'react-redux';
import { noteSelectors, noteOperations } from '../../redux/notes';
import AddNote from './components/AddNote';
import { UserInfo } from './ProfileStyled';

import './tr.css';

class ProfileView extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { userNotes } = this.props;
    
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

          <table className="table">
            <thead>
              <tr>
                <th>Слово</th>
                <th>Переклад</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Привіт</td>
                <td>Hello</td>
              </tr>
              <tr>
                <td>Як справи</td>
                <td>How are you?</td>
              </tr>
              <tr>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul>
          {userNotes.map(({ id, word, translatedWord }) => (
            <li key={id}>
              <p>Слово: {word}</p>
              <p>Переклад: {translatedWord}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // userInfo: state.tasks.filter,
  userNotes: noteSelectors.getUserNotes(state),
});

const mapDispatchToProps = {
  fetchNotes: noteOperations.fetchNoteForUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
