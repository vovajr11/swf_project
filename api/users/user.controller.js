const Joi = require('joi');
const {
  Types: { ObjectId },
} = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('./user.model');
const {
  UnauthorizedError,
  NotFoundError,
} = require('../helpers/errors.constructor');
const config = require('../../config');

class UserController {
  constructor() {
    this._costFactor = 4;
  }

  get createUser() {
    return this._createUser.bind(this);
  }

  get getUsers() {
    return this._getUsers.bind(this);
  }

  get getCurrentUser() {
    return this._getCurrentUser.bind(this);
  }

  get signIn() {
    return this._signIn.bind(this);
  }

  async _createUser(req, res, next) {
    try {
      const { password, username, email } = req.body;
      const passwordHash = await bcryptjs.hash(password, this._costFactor);

      const existingUser = await userModel.findUserByEmail(email);
      if (existingUser) {
        return res.status(409).send('User with such email already exists');
      }

      const user = await userModel.create({
        username,
        email,
        password: passwordHash,
      });

      const token = await this.checkUser(email, password);

      return res.status(201).json({
        user: {
          username: user.username,
          email: user.email,
        },
        token,
      });
    } catch (err) {
      next(err);
    }
  }

  async _getUsers(req, res, next) {
    try {
      const users = await userModel.find();

      return res.status(200).json(this.prepareUsersResponse(users));
    } catch (error) {
      next(error);
    }
  }

  async _getCurrentUser(req, res, next) {
    const [userForResponse] = this.prepareUsersResponse([req.user]);

    return res.status(200).json(userForResponse);
  }

  async _signIn(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await userModel.findUserByEmail(email);
      const token = await this.checkUser(email, password);

      return res.status(200).json({
        user: {
          username: user.username,
          email: user.email,
        },
        token,
      });
    } catch (err) {
      next(err);
    }
  }

  async checkUser(email, password) {
    const user = await userModel.findUserByEmail(email);
    if (!user) {
      throw new UnauthorizedError('Authentication failed');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedError('Authentication failed');
    }

    const token = await jwt.sign({ id: user._id }, config.JWT_SECRET, {
      expiresIn: 2 * 24 * 60 * 60, // two days
    });

    await userModel.updateToken(user._id, token);

    return token;
  }

  async authorize(req, res, next) {
    try {
      // 1. витягнути токен користувача з заголовка Authorization
      const authorizetionHeader = req.get('Authorization') || '';
      const token = authorizetionHeader.replace('Bearer ', '');

      // 2. витягнути id користувача з пейлоада або вернути користувачу
      // помилку зі статус кодом 401
      let userId;
      try {
        userId = await jwt.verify(token, process.env.JWT_SECRET).id;
      } catch (err) {
        next(new UnauthorizedError('User not authorized'));
      }

      // 3. витягнути відповідного користувача. Якщо такого немає - викинути
      // помилку зі статус кодом 401
      // userModel - модель користувача в нашій системі
      const user = await userModel.findById(userId);

      if (!user || user.token !== token) {
        throw new UnauthorizedError('User not authorized');
      }

      // 4. Якщо все пройшло успішно - передати запис користувача і токен в req
      // і передати обробку запиту на наступний middleware
      req.user = user;
      req.token = token;

      next();
    } catch (err) {
      next(err);
    }
  }

  async logout(req, res, next) {
    try {
      const user = req.user;
      await userModel.updateToken(user._id, null);

      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }

  validateCreateUser(req, res, next) {
    const validationRules = Joi.object({
      username: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().min(6).required(),
    });

    const validationResult = validationRules.validate(req.body);

    validationResult.error
      ? res.status(400).send(validationResult.error)
      : next();
  }

  validateSignIn(req, res, next) {
    const signInRules = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    });

    const validationResult = signInRules.validate(req.body);

    validationResult.error
      ? res.status(400).send(validationResult.error)
      : next();
  }

  prepareUsersResponse(users) {
    return users.map(user => {
      const { username, email, _id, token } = user;
      return {
        id: _id,
        username,
        email,
      };
    });
  }
}

module.exports = new UserController();
