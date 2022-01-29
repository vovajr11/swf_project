import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import courseAction from './courseAction';

const initialState = { items: [], currentCourseDetails: {} };

const fetchCourse = (state, action) => {
    return { ...state, items: [...action.payload] };
};

const currentPage = (state, action) => {
    if (action.payload.length > 1) {
        return { ...state, currentCourseDetails: [...action.payload] };
    }

    return { ...state, currentCourseDetails: action.payload };
};

const items = createReducer(initialState, {
    [courseAction.fetchCourseSuccess]: fetchCourse,
    [courseAction.fetchCurrentCourseDetailsSuccess]: currentPage,
    [courseAction.fetchChapterByIdSuccess]: currentPage,
});

export default items;
