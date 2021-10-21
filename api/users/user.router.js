const { Router } = require('express');
const userController = require('./user.controller');
const validationFns = require('../helpers/validationFns');

const userRouter = Router();

userRouter.post(
  '/sign-up',
  validationFns.validateCreateUser,
  userController.createUser,
);

userRouter.get('/', userController.getUsers);

userRouter.get(
  '/current',
  validationFns.authorize,
  userController.getCurrentUser,
);

userRouter.put('/sign-in', validationFns.validateSignIn, userController.signIn);

userRouter.patch('/logout', validationFns.authorize, userController.logout);

module.exports = userRouter;
