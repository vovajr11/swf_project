import { createAction } from '@reduxjs/toolkit';

const burderOpen = createAction('burger/open');
const burderClose = createAction('burger/close');

const getBurderState = state => state.burger;

export default {
  burderOpen,
  burderClose,
  getBurderState,
};
