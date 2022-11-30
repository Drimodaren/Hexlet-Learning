// Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов.

import { entries, result } from 'lodash';

// import cloneDeep from '../objects.js';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// // result имеет такую же структуру, как и data
// const result = cloneDeep(data);

// // Но внутри другие объекты
// result.key2 !== data.key2; // true
// result.key2.innerKey !== data.key2.innerKey; // true
// Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные в другой объект.
//Если значением какого-то свойства является объект, то нужно рекурсивно запустить реализованную функцию.

// Подсказки
// Для рекурсивного запуска понадобится имя для функции
// _.isObject()
// Object.entries()
// Рекурсия

const getCloneDeep = (obj) => {
  if (typeof obj === 'object') {
    const result = {};
    for (const key in obj) {
      result[key] = getCloneDeep(obj[key]);
    }
    return result;
  }
  return obj;
};

console.log(getCloneDeep(data));
