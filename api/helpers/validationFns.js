const Joi = require('joi');
const jwt = require('jsonwebtoken');
const {
    Types: { ObjectId },
} = require('mongoose');
const userModel = require('../users/user.model');
const { UnauthorizedError } = require('./errors.constructor');

class Validation {
    async authorize(req, res, next) {
        try {
            // 1. витягнути токен користувача з заголовка Authorization
            const authorizetionHeader = req.get('Authorization') || '';
            const token = authorizetionHeader.replace('Bearer ', '');

            // 2. витягнути id користувача з пейлоада або вернути користувачу
            // помилку зі статус кодом 401

            console.log(token, 'token');

            let userId;
            try {
                userId = await jwt.verify(token, process.env.JWT_SECRET).id;
            } catch (err) {
                next(new UnauthorizedError('User not authorized 2'));
            }

            // 3. витягнути відповідного користувача. Якщо такого немає - викинути
            // помилку зі статус кодом 401
            // userModel - модель користувача в нашій системі
            const user = await userModel.findById(userId);

            if (!user || user.token !== token) {
                throw new UnauthorizedError('User not authorized 3');
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

    prepareUsersResponse(users) {
        return users.map(user => {
            const { username, email, _id, role } = user;
            return {
                id: _id,
                username,
                email,
                role,
            };
        });
    }

    prepareCoursesResponse(courses) {
        return courses.map(course => {
            const { _id, courseName, courseDescription, courseModules } =
                course;
            return {
                id: _id,
                courseName,
                courseDescription,
                courseModules,
            };
        });
    }

    getUserNotes(users) {
        return users.map(user => {
            const { notes } = user;
            return {
                notes,
            };
        });
    }

    validateId(req, res, next) {
        const { id } = req.params;

        !ObjectId.isValid(id) ? res.status(400).send('tut') : next();
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
}

module.exports = new Validation();
