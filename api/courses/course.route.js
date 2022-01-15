const { Router } = require('express');
const courseController = require('./course.controller');

const courseRouter = Router();

courseRouter.post('/create-course', courseController.createCourse);
courseRouter.put('/create-module/:id', courseController.createModule);
courseRouter.put('/create-theory/:id', courseController.createTheoryForModule);
courseRouter.get('/', courseController.getCourse);

module.exports = courseRouter;
