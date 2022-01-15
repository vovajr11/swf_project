const Joi = require('joi');
const userModel = require('../users/user.model');
const { NotFoundError } = require('../helpers/errors.constructor');
const validationFns = require('../helpers/validationFns');

class NoteController {
    async getCurrentUserNotes(req, res, next) {
        const [data] = validationFns.getUserNotes([req.user]);

        return res.status(200).json(data.notes);
    }

    async addNoteForUser(req, res, next) {
        try {
            const { word, translatedWord, id } = req.body.noteData;

            const updatedUser = await userModel.findByIdAndUpdate(
                req.user._id,
                {
                    $push: {
                        notes: {
                            id,
                            word,
                            translatedWord,
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
