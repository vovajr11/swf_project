const { Router } = require('express');
const newsController = require('./news.controller');

const newsRouter = Router();

newsRouter.post('/add-news', newsController.addNews);
newsRouter.get('/', newsController.getAllNews);

module.exports = newsRouter;
