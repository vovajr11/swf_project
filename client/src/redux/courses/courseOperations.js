import axios from 'axios';
import courseAction from './courseAction';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.baseURL = 'http://localhost:5000/api';

const fetchCourse = () => (dispatch, getState) => {
    dispatch(courseAction.fetchCourseRequest());

    axios
        .get('/course/')
        .then(res => {
            dispatch(courseAction.fetchCourseSuccess(res.data));
        })
        .catch(error => dispatch(courseAction.fetchCourseError(error)));
};

const fetchCourseById = id => (dispatch, getState) => {
    dispatch(courseAction.fetchCourseByIdRequest());

    axios
        .get(`/course/current-course/${id}`)
        .then(res => {
            dispatch(courseAction.fetchCurrentCourseDetailsSuccess(res.data));
        })
        .catch(error => dispatch(courseAction.fetchCourseByIdError(error)));
};

const fetchCurrentChapterById = chapterId => (dispatch, getState) => {
    dispatch(courseAction.fetchChapterByIdRequest());

    axios
        .get(`/course/current-module/${chapterId}`)
        .then(res => {
            dispatch(courseAction.fetchChapterByIdSuccess(res.data));
        })
        .catch(error => dispatch(courseAction.fetchChapterByIdError(error)));
};

export default {
    fetchCourse,
    fetchCourseById,
    fetchCurrentChapterById,
};
