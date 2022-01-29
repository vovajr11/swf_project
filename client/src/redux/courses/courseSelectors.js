import { createSelector } from '@reduxjs/toolkit';

const getCourseData = state => state.courses.items;
const getDetailsOfTheCurrentCourse = state =>
    state.courses.currentCourseDetails;

export default {
    getCourseData,
    getDetailsOfTheCurrentCourse,
};
