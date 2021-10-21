const mongoose = require('mongoose');
const { Schema } = mongoose;

const notesSchema = new Schema({
  word: { type: String, required: false },
  translatedWord: { type: String, required: false },
});

const noteModel = mongoose.model('Note', notesSchema);

module.exports = noteModel;
