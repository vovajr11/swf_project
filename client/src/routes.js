import { lazy } from 'react';
import { v4 as uuid_v4 } from 'uuid';
// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        path: '/',
        label: 'Home',
        exact: true,
        key: uuid_v4(),
        component: lazy(() => import('./views/HomeView')),
        private: true,
        restricted: false,
    },

    {
        path: '/courses',
        label: 'Courses',
        exact: true,
        key: uuid_v4(),
        component: lazy(() => import('./views/AllCoursesView')),
        private: true,
        restricted: false,
    },

    {
        path: '/courses/:courseName/:courseId',
        label: 'Courses D',
        exact: true,
        key: uuid_v4(),
        component: lazy(() => import('./views/CourseDetailsView')),
        private: true,
        restricted: false,
    },

    {
        path: '/courses/:courseName/:courseId/chapterId::chapterId',
        label: 'Courses D',
        exact: true,
        key: uuid_v4(),
        component: lazy(() => import('./views/ChapterDetailsView')),
        private: true,
        restricted: false,
    },

    {
        path: '/news',
        label: 'News',
        exact: true,
        key: uuid_v4(),
        component: lazy(() => import('./views/News/index')),
        private: true,
        restricted: false,
    },

    {
        path: '/profile',
        label: 'Propfile',
        exact: true,
        key: uuid_v4(),
        component: lazy(() => import('./views/ProfileView/index')),
        private: true,
        restricted: false,
    },

    {
        path: '/setting',
        label: 'Setting',
        exact: true,
        key: uuid_v4(),
        component: lazy(() => import('./views/SettingView')),
        private: true,
        restricted: false,
    },

    {
        path: '/login',
        label: 'Login',
        exact: true,
        key: uuid_v4(),
        component: lazy(() => import('./views/LoginView/index')),
        private: false,
        restricted: true,
    },

    {
        path: '/register',
        label: 'Register',
        exact: true,
        key: uuid_v4(),
        component: lazy(() => import('./views/RegisterView/index')),
        private: false,
        restricted: true,
    },

    {
        path: '/verification',
        label: 'Login',
        exact: true,
        key: uuid_v4(),
        component: lazy(() => import('./views/VerificationView')),
        private: false,
        restricted: true,
    },
];
