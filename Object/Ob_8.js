// Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из объекта любой глубины вложенности
// значение по указанным ключам. Параметры:

import { result } from 'lodash';

// Исходный объект
// Цепочка ключей (массив), по которой ведётся поиск значения
// В случае, когда добраться до значения невозможно, возвращается null.
// import get from './objects.js';

const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

// get(data, ['undefined']); // null
// get(data, ['user']); // 'ubuntu'
// get(data, ['user', 'ubuntu']); // null
// get(data, ['hosts', 1, 'name']); // 'web2'
// get(data, ['hosts', 0]); // { name: 'web1' }
// get(data, ['hosts', 1, null]); // 3
// get(data, ['hosts', 1, 'active']); // false
// В этой задаче нельзя использовать библиотеку lodash. Смысл задачи в том,
// чтобы реализовать всё самостоятельно.

// Для проверки наличия ключа используйте вариант предлагаемый ниже:

// // Метод Object.hasOwn() проверяет есть ли в объекте ключ,
// // просто скопируйте этот вызов и подставьте правильные аргументы

// const obj = { key: 'value' };
// Object.hasOwn(obj, 'key'); // true
// Object.hasOwn(obj, 'another key'); // false

const deep = (data, keys) => {
  let result = data;
  for (const key of keys) {
    if (result.hasOwnProperty(key)) {
      result = result[key];
    } else {
      return null;
    }
  }

  return result;
};

console.log(deep(data, ['hosts', 1, 'name']));
