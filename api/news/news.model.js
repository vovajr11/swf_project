const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema({
    content: { type: String, required: true },
});

const newsModel = mongoose.model('News', newsSchema);

module.exports = newsModel;
