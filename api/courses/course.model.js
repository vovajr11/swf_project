const mongoose = require('mongoose');
const {
    Schema,
    Types: { ObjectId },
} = mongoose;

const courseSchema = new Schema({
    courseName: { type: String, required: true },
    courseDescription: { type: String, required: true },
    courseModules: [{ type: String, ref: 'Module' }],
});

const moduleSchema = new Schema({
    moduleName: { type: String, required: true },
    chapters: [
        {
            chapterId: { type: String, ref: 'Chapters' },
            chapterName: { type: String, required: true },
        },
    ],
});

const chapterSchema = new Schema({
    chapterName: { type: String, required: true },
    chapterContent: { type: String, required: true },
});

const courseModel = mongoose.model('Course', courseSchema);
const moduleModel = mongoose.model('Module', moduleSchema);
const chapterModel = mongoose.model('Chapters', chapterSchema);

module.exports = { courseModel, moduleModel, chapterModel };
