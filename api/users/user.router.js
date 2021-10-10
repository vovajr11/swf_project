const { Router } = require('express');
const userController = require('./user.controller');

const userRouter = Router();

userRouter.post(
  '/',
  userController.validateCreateUser,
  userController.createUser,
);

userRouter.get('/', userController.getUsers);

userRouter.put(
  '/sign-in',
  userController.validateSignIn,
  userController.signIn,
);

userRouter.patch('/logout', userController.authorize, userController.logout);
// userRouter.get(
//   '/:id',
//   CourseController.validateId,
//   CourseController.getCourseById,
// );

module.exports = userRouter;
