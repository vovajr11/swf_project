const mongoose = require('mongoose');
const {
    Types: { ObjectId },
} = mongoose;

const { courseModel, moduleModel, chapterModel } = require('./course.model');
const validationFns = require('../helpers/validationFns');

class CourseController {
    async createCourse(req, res, next) {
        try {
            const { courseName, courseDescription } = req.body;

            const courseData = await courseModel.create({
                courseName,
                courseDescription,
            });

            return res.status(201).json({
                id: courseData._id,
                courseName: courseData.courseName,
                courseDescription: courseData.courseDescription,
                courseModules: courseData.courseModules,
            });
        } catch (err) {
            next(err);
        }
    }

    async getCourse(req, res, next) {
        try {
            const courses = await courseModel.find().populate({
                path: 'courseModules',
                select: ['moduleName', 'chapters'],
            });

            return res
                .status(200)
                .json(validationFns.prepareCoursesResponse(courses));
        } catch (err) {
            next(err);
        }
    }

    async createModule(req, res, next) {
        try {
            const { moduleName } = req.body;
            const courseId = req.params.id;

            const moduleData = await moduleModel.create({
                moduleName,
            });

            await courseModel.findByIdAndUpdate(
                courseId,
                {
                    $push: { courseModules: moduleData._id },
                },
                {
                    new: true,
                },
            );

            return res.status(201).json({
                _id: moduleData._id,
                moduleName,
                chapters: moduleData.chapters,
            });
        } catch (err) {
            next(err);
        }
    }

    async createTheoryForModule(req, res, next) {
        try {
            const { chapterName, chapterContent } = req.body;
            const moduleId = req.params.id;

            const chapterId = ObjectId();

            await moduleModel.findByIdAndUpdate(
                moduleId,
                {
                    $push: {
                        chapters: {
                            id: chapterId,
                            chapterName,
                            chapterContent,
                        },
                    },
                },
                {
                    new: true,
                },
            );
            return res.status(200).json({
                id: chapterId,
                chapterName,
                chapterContent,
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new CourseController();
