const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const nodemailer = require('nodemailer');
const userModel = require('./user.model');
const validationFns = require('../helpers/validationFns');
const { UnauthorizedError } = require('../helpers/errors.constructor');

class UserController {
  constructor() {
    this._costFactor = 4;

    this._transport = nodemailer.createTransport({
      pool: true,
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });
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

      console.log(process.env.NODEMAILER_USER, 'process.env.NODEMAILER_USER');

      const user = await userModel.create({
        username,
        email,
        password: passwordHash,
      });

      await this.sendVerificationEmail(user);

      const token = await this.checkUser(email, password);

      return res.status(201).json({
        user: {
          username: user.username,
          email: user.email,
          id: user._id,
        },
        token,
      });
    } catch (err) {
      next(err);
    }
  }

  async sendVerificationEmail(user) {
    const verificationToken = uuid.v4();

    await userModel.createVerificationToken(user.id, verificationToken);

    await this._transport.sendMail({
      from: process.env.NODEMAILER_USER,
      to: user.email,
      subject: 'Email verification',
      html: `<h3>Hello ${user.username}</h3>
      <p>You need to go <a href="${process.env.REACT_APP_API_URL}/users/verify/${verificationToken}" style="color: green; text-decoration: none; font-weight: 700">Here</a> to verify your profile</p>`,
    });
  }

  async verifyEmail(req, res, next) {
    try {
      const { token } = req.params;

      const userToVerify = await userModel.findByVerificationToken(token);
      // if (!userToVerify) {
      //   throw new NotFoundError('User not found');
      // }

      await userModel.verifyUser(userToVerify.id);

      return res.status(200).render('successfulVerification');
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
          id: user._id,
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
    if (!user || user.status !== 'Verified') {
      throw new UnauthorizedError('Authentication failed');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    // if (!isPasswordValid) {
    //   throw new UnauthorizedError('Authentication failed');
    // }

    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 2 * 24 * 60 * 60, // two days
    });

    await userModel.updateToken(user._id, token);

    return token;
  }
}

module.exports = new UserController();
