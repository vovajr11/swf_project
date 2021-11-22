import { v4 as uuid_v4 } from 'uuid';

export const quizData = [
  {
    id: 0,
    answers: [
      {
        id: uuid_v4(),
        answer: 'my',
      },
      {
        id: uuid_v4(),
        answer: 'Vova',
      },
      {
        id: uuid_v4(),
        answer: 'Hello',
      },
      {
        id: uuid_v4(),
        answer: 'name',
      },
    ],
    corectAnswer: `Hello my name Vova`,
  },
  {
    id: 1,
    answers: [
      {
        id: uuid_v4(),
        answer: 'my',
      },
      {
        id: uuid_v4(),
        answer: 'Petro',
      },
      {
        id: uuid_v4(),
        answer: 'Hello',
      },
      {
        id: uuid_v4(),
        answer: 'name',
      },
    ],
    corectAnswer: `Hello my name Petro`,
  },
  {
    id: 3,
    answers: [
      {
        id: uuid_v4(),
        answer: 'my',
      },
      {
        id: uuid_v4(),
        answer: 'Ivan',
      },
      {
        id: uuid_v4(),
        answer: 'Hello',
      },
      {
        id: uuid_v4(),
        answer: 'name',
      },
    ],
    corectAnswer: `Hello my name Ivan`,
  },
  {
    id: 4,
    answers: [
      {
        id: uuid_v4(),
        answer: 'my',
      },
      {
        id: uuid_v4(),
        answer: 'Roman',
      },
      {
        id: uuid_v4(),
        answer: 'Hello',
      },
      {
        id: uuid_v4(),
        answer: 'name',
      },
    ],
    corectAnswer: `Hello my name Roman`,
  },
];
