const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('./user.model');
const validationFns = require('../helpers/validationFns');

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

      return res.status(200).json(validationFns.prepareUsersResponse(users));
    } catch (error) {
      next(error);
    }
  }

  async _getCurrentUser(req, res, next) {
    const [userForResponse] = validationFns.prepareUsersResponse([req.user]);

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

  async logout(req, res, next) {
    try {
      const user = req.user;
      await userModel.updateToken(user._id, null);

      return res.status(204).send();
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

    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 2 * 24 * 60 * 60, // two days
    });

    await userModel.updateToken(user._id, token);

    return token;
  }
}

module.exports = new UserController();
