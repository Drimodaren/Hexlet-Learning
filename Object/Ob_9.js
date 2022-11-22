import _ from 'lodash';
// Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект данными из другого объекта по разрешенному списку ключей. Параметры:

import { result } from 'lodash';

// Исходный объект
// Список ключей которые нужно заменить
// Данные, которые нужно сливать в исходный объект
// В случае, когда список ключей пустой, нужно сливать все данные полностью.

// import fill from '../objects.js';

const company = {
  name: 'aa',
  state: 'moderating',
  age: 1,
};

const data = {
  name: 'Hexlet',
  state: 'published',
  status: 'pro',
};

// // Вызовы ниже нужно рассматривать как независимые

// fill(company, ['name'], data);
// // {
// //   name: 'Hexlet',
// //   state: 'moderating',
// // }

// fill(company, [], data);
// // {
// //   name: 'Hexlet',
// //   state: 'published',
// // }

const getAssign = (obj1, keys, obj2) => {
  let result = obj1;
  if (keys.length === 0) {
    result = Object.assign(obj1, obj2);
  } else {
    result = Object.assign(obj1, _.pick(obj2, keys));
  }

  return result;
};

console.log(getAssign(company, ['name', 'status', 'Andy'], data));
