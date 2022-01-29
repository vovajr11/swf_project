import { createAction } from '@reduxjs/toolkit';

const fetchCourseRequest = createAction('course/fetchRequest');
const fetchCourseSuccess = createAction('course/fetchSuccess');
const fetchCourseError = createAction('course/fetchError');

const fetchCourseByIdRequest = createAction('courseById/fetchRequest');
const fetchCourseByIdSuccess = createAction('courseById/fetchSuccess');
const fetchCourseByIdError = createAction('courseById/fetchError');

const fetchChapterByIdRequest = createAction('chapterById/fetchRequest');
const fetchChapterByIdSuccess = createAction('chapterById/fetchSuccess');
const fetchChapterByIdError = createAction('chapterById/fetchError');

const fetchCurrentCourseDetailsSuccess = createAction(
    'courseDetails/fetchSuccess',
);

export default {
    fetchCourseRequest,
    fetchCourseSuccess,
    fetchCourseError,

    fetchCourseByIdRequest,
    fetchCourseByIdSuccess,
    fetchCourseByIdError,

    fetchChapterByIdRequest,
    fetchChapterByIdSuccess,
    fetchChapterByIdError,

    fetchCurrentCourseDetailsSuccess,
};
