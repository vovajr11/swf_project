const Joi = require('joi');
const { v4: uuidv4 } = require('uuid');
const userModel = require('../users/user.model');
const noteModel = require('../notes/note.model');
const { NotFoundError } = require('../helpers/errors.constructor');
const validationFns = require('../helpers/validationFns');

class NoteController {
  async getCurrentUserNotes(req, res, next) {
    const [userForResponse] = validationFns.prepareUsersResponse([req.user]);

    return res.status(200).json(userForResponse.notes);
  }

  async addNoteForUser(req, res, next) {
    try {
      const { word, translatedWord } = req.body.noteData;

      const updatedUser = await userModel.findByIdAndUpdate(
        req.user._id,
        {
          $push: {
            notes: {
              word,
              translatedWord,
              id: uuidv4(),
            },
          },
        },
        {
          new: true,
        },
      );

      return res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  }

  async addNoteForUser(req, res, next) {
    try {
      const { word, translatedWord } = req.body.noteData;

      const updatedUser = await userModel.findByIdAndUpdate(
        req.user._id,
        {
          $push: {
            notes: {
              word,
              translatedWord,
              id: uuidv4(),
            },
          },
        },
        {
          new: true,
        },
      );

      return res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  }

  async removeNoteForUser(req, res, next) {
    try {
      console.log('------------------------------');
      console.log(req.params.id, 'req.params.id;');
      console.log(req.user._id, 'req.user._id,');
      const noteId = req.params.id;

      const updatedUser = await userModel.findByIdAndUpdate(
        req.user._id,
        {
          $pull: {
            notes: {
              id: noteId,
            },
          },
        },
        {
          new: true,
        },
      );

      return res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new NoteController();
