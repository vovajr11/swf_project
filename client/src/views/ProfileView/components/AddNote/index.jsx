import React, { Component } from 'react';
import { connect } from 'react-redux';
import { noteOperations } from '../../../../redux/notes';

class AddNote extends Component {
  state = {
    word: '',
    translatedWord: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddTask({ ...this.state });

    this.setState({ word: '', translatedWord: '' });
  };

  render() {
    return (
      <form className="TaskEditor" onSubmit={this.handleSubmit}>
        <label className="TaskEditor-label">
          Word
          <input
            name="word"
            type="text"
            value={this.state.word}
            onChange={this.handleChange}
          />
        </label>

        <label className="TaskEditor-label">
          Translated word
          <input
            name="translatedWord"
            type="text"
            value={this.state.translatedWord}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Добавить слово</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddTask: noteOperations.addNote,
};

export default connect(null, mapDispatchToProps)(AddNote);
