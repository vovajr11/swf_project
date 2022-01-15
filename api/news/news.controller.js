const newsModel = require('../news/news.model');

class NewsController {
  async addNews(req, res, next) {
    try {
      const { content } = req.body;

      const news = await newsModel.create({
        content,
      });

      return res.status(201).json({
        content: news.content,
      });
    } catch (err) {
      next(err);
    }
  }

  async getAllNews(req, res, next) {
    try {
      const news = await newsModel.find();

      return res.status(200).json(news);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new NewsController();
