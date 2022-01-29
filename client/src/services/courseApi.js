import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.baseURL = 'http://localhost:5000/api';

export const fetchCourses = () => axios.get('/course').then(res => res.data);

export const fetchCourseModules = id =>
    axios.get(`/course/current-course/${id}`).then(res => res.data);

export const fetchCurrentChapter = id =>
    axios.get(`/course/current-chapter/${id}`).then(res => res.data);
