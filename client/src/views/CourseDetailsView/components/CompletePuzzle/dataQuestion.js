import { v4 as uuid_v4 } from 'uuid';

export const quizData = [
  {
    id: 0,
    answers: [
      {
        id: uuid_v4(),
        answer: 'mi',
      },
      {
        id: uuid_v4(),
        answer: 'Hola',
      },
      {
        id: uuid_v4(),
        answer: 'nombre',
      },
      {
        id: uuid_v4(),
        answer: 'es',
      },
      {
        id: uuid_v4(),
        answer: 'vova',
      },
    ],
    corectAnswer: `Hola mi nombre es vova`,
  },
  {
    id: 1,
    answers: [
      {
        id: uuid_v4(),
        answer: 'su',
      },
      {
        id: uuid_v4(),
        answer: 'es',
      },
      {
        id: uuid_v4(),
        answer: 'Cuál',
      },
      {
        id: uuid_v4(),
        answer: 'nombre',
      },
    ],
    corectAnswer: `Cuál es su nombre`,
  },
  {
    id: 3,
    answers: [
      {
        id: uuid_v4(),
        answer: 'Cuantos',
      },
      {
        id: uuid_v4(),
        answer: 'tienes',
      },
      {
        id: uuid_v4(),
        answer: 'años',
      },
    ],
    corectAnswer: `Cuantos años tienes`,
  },
  {
    id: 4,
    answers: [
      {
        id: uuid_v4(),
        answer: 'vas',
      },
      {
        id: uuid_v4(),
        answer: 'Tú',
      },
      {
        id: uuid_v4(),
        answer: 'a la',
      },
      {
        id: uuid_v4(),
        answer: 'escuela',
      },
    ],
    corectAnswer: `Tú vas a la escuela`,
  },
];
