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

    async getCompleteInfoAboutCourses(req, res, next) {
        try {
            const courses = await courseModel.find().populate({
                path: 'courseModules',
                select: ['moduleName', 'chapters'],
            });

            return res
                .status(200)
                .json(validationFns.prepareCourseDetailsResponse(courses));
        } catch (err) {
            next(err);
        }
    }

    async getCourse(req, res, next) {
        try {
            const courses = await courseModel.find();

            return res
                .status(200)
                .json(validationFns.prepareCoursesResponse(courses));
        } catch (err) {
            next(err);
        }
    }

    async getCourseById(req, res, next) {
        try {
            const course = await courseModel.findById(req.params.id).populate({
                path: 'courseModules',
                select: ['moduleName', 'chapters'],
            });

            return res.status(200).json({
                courseName: course.courseName,
                courseModules: course.courseModules,
            });
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

    async getChapterById(req, res, next) {
        try {
            const { chapterId } = req.params;

            const chapter = await chapterModel.findById(chapterId);

            return res.status(200).json(chapter);
        } catch (err) {
            next(err);
        }
    }

    async createTheoryForModule(req, res, next) {
        try {
            const { chapterName, chapterContent } = req.body;
            const moduleId = req.params.id;

            const chapterData = await chapterModel.create({
                chapterName,
                chapterContent,
            });

            await moduleModel.findByIdAndUpdate(
                moduleId,
                {
                    $push: {
                        chapters: {
                            chapterId: chapterData._id,
                            chapterName: chapterData.chapterName,
                        },
                    },
                },
                {
                    new: true,
                },
            );

            return res.status(201).json(chapterData);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new CourseController();
