import { v4 as uuid_v4 } from 'uuid';

export const testsData = [
  {
    id: uuid_v4(),
    question: 'Як перекладається: Hola ?',
    options: ['Привіт', 'Добрий вечір', 'Ранок'],
    answer: 'Привіт',
  },
  {
    id: uuid_v4(),
    question: 'Як перекладається: Buenas noches?',
    options: ['Привіт', 'Добрий вечір', 'Вечір'],
    answer: 'Добрий вечір',
  },
  {
    id: uuid_v4(),
    question: 'Як перекладається: padre?',
    options: ['Тато', 'Мама', 'Син'],
    answer: 'Тато',
  },
  {
    id: uuid_v4(),
    question: 'Як перекладається:  cena?',
    options: ['Сніданок', 'їда', 'Вечеря'],
    answer: 'Вечеря',
  },
];
