import { lazy } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    key: 1,
    component: lazy(() => import('./views/HomeView')),
  },

  {
    path: '/courses',
    label: 'Courses',
    exact: true,
    key: 2,
    component: lazy(() => import('./views/AllCoursesView')),
  },

  {
    path: '/courses/:courseName',
    label: 'Courses D',
    exact: true,
    key: 3,
    component: lazy(() => import('./views/CourseDetailsView')),
  },

  {
    path: '/profile',
    label: 'Propfile',
    exact: true,
    key: 4,
    component: lazy(() => import('./views/ProfileView')),
  },

  {
    path: '/setting',
    label: 'Setting',
    exact: true,
    key: 5,
    component: lazy(() => import('./views/SettingView')),
  },

  {
    path: '/login',
    label: 'Login',
    exact: true,
    key: 6,
    component: lazy(() => import('./views/LoginView')),
  },

  {
    path: '/register',
    label: 'Register',
    exact: true,
    key: 7,
    component: lazy(() => import('./views/RegisterView/index')),
  },
];
