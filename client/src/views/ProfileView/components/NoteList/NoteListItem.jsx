import React from 'react';
import {
  WordItem,
  WordItemInfo,
  Word,
  TranslatedWord,
  DeleteWord,
} from './NoteListStyled';

const NoteListItem = ({ word, translatedWord, onRemove }) => {
  return (
    <WordItem>
      <WordItemInfo>
        <p>
          <Word>{translatedWord}</Word> |{' '}
          <TranslatedWord>{word}</TranslatedWord>
        </p>

        <DeleteWord type="button" onClick={onRemove}>
          X
        </DeleteWord>
      </WordItemInfo>
    </WordItem>
  );
};

export default NoteListItem;
