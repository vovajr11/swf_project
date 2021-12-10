import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid_v4 } from 'uuid';
import { Input, Button } from '@chakra-ui/react';
import { noteOperations } from '../../../../redux/notes';
import { VocabularyLabel } from './AddWordToVocabularyStyled';

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

    this.props.onAddTask({ ...this.state, id: uuid_v4() });

    this.setState({ word: '', translatedWord: '' });
  };

  render() {
    return (
      <form className="TaskEditor" onSubmit={this.handleSubmit}>
        <VocabularyLabel>
          Word
          <Input
            name="word"
            type="text"
            value={this.state.word}
            onChange={this.handleChange}
          />
        </VocabularyLabel>

        <VocabularyLabel className="TaskEditor-label">
          Translated word
          <Input
            name="translatedWord"
            type="text"
            value={this.state.translatedWord}
            onChange={this.handleChange}
          />
        </VocabularyLabel>

        <Button type="submit" colorScheme="blue">
          Добавить слово
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddTask: noteOperations.addNote,
};

export default connect(null, mapDispatchToProps)(AddNote);
