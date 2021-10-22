import React from 'react';

const NoteListItem = ({ word, translatedWord, onRemove }) => {
  return (
    <li>
      <p>Word {word}</p>
      <p>Translate {translatedWord}</p>

      <button type="button" onClick={onRemove}>
        Удалить
      </button>
    </li>
  );
};

export default NoteListItem;
