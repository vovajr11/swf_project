const { Router } = require('express');
const courseController = require('./course.controller');

const courseRouter = Router();

courseRouter.post('/create-course', courseController.createCourse);
courseRouter.put('/create-module/:id', courseController.createModule);
courseRouter.put('/create-theory/:id', courseController.createTheoryForModule);
courseRouter.get('/', courseController.getCourse);
courseRouter.get('/all-course', courseController.getCompleteInfoAboutCourses);
courseRouter.get('/current-course/:id', courseController.getCourseById);
courseRouter.get(
    '/current-chapter/:chapterId',
    courseController.getChapterById,
);

module.exports = courseRouter;
