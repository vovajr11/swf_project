import { lazy } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    key: 1,
    component: lazy(() => import('./views/HomeView')),
    private: true,
    restricted: false,
  },

  {
    path: '/courses',
    label: 'Courses',
    exact: true,
    key: 2,
    component: lazy(() => import('./views/AllCoursesView')),
    private: true,
    restricted: false,
  },

  {
    path: '/courses/:courseName',
    label: 'Courses D',
    exact: true,
    key: 3,
    component: lazy(() => import('./views/CourseDetailsView')),
    private: true,
    restricted: false,
  },

  {
    path: '/profile',
    label: 'Propfile',
    exact: true,
    key: 4,
    component: lazy(() => import('./views/ProfileView/index')),
    private: true,
    restricted: false,
  },

  {
    path: '/setting',
    label: 'Setting',
    exact: true,
    key: 5,
    component: lazy(() => import('./views/SettingView')),
    private: true,
    restricted: false,
  },

  {
    path: '/login',
    label: 'Login',
    exact: true,
    key: 6,
    component: lazy(() => import('./views/LoginView/index')),
    private: false,
    restricted: true,
  },

  {
    path: '/register',
    label: 'Register',
    exact: true,
    key: 7,
    component: lazy(() => import('./views/RegisterView/index')),
    private: false,
    restricted: true,
  },
];
