const { Router } = require('express');
const validationFns = require('../helpers/validationFns');
const noteController = require('../notes/note.controller');

const noteRouter = Router();

noteRouter.get(
  '/userNotes',
  validationFns.authorize,
  noteController.getCurrentUserNotes,
);

noteRouter.delete(
  '/:id',
  validationFns.authorize,
  noteController.removeNoteForUser,
);

noteRouter.put(
  '/:id',
  validationFns.authorize,
  validationFns.validateId,
  noteController.addNoteForUser,
);

module.exports = noteRouter;
