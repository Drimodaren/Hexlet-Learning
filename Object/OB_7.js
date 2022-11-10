// Реализуйте и экспортируйте функцию по умолчанию,
// которая формирует из переданного объекта другой объект,
// включающий только указанные свойства. Параметры:

// Исходный объект
// Массив имен свойств
// import pick from './objects.js';

// const data = {
//   user: 'ubuntu',
//   cores: 4,
//   os: 'linux',
// };

// pick(data, ['user']); // { user: 'ubuntu' }
// pick(data, ['user', 'os']); // { user: 'ubuntu', os: 'linux' }
// pick(data, []); // {}
// // Если такого свойства нет в исходных данных,
// // то оно игнорируется
// pick(data, ['none', 'cores']); // { cores: 4 }

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};
const obj = (data, arr) => {
  if (arr.length === 0) {
    return {}
  }
  let obj = {};
  const entries = Object.entries(data);
  for (let i = 0; i < arr.length; i++) {
    for (const [key, value] of entries) {
      for (let i = 0; i < arr.length; i++) {
        if (key === arr[i]) {
          obj[key] = value;
        }
      }
    }

    return obj;
  }
};
console.log(obj(data, ['none', 'cores']));

const lessonMembers = {
  syntax: 3,
  using: 2,
  foreach: 10,
  operations: 10,
  destructuring: 2,
  array: 2,
};

const findKeys = (obj, expectedValue) => {
  const result = [];

  const entries = Object.entries(obj);
  console.log(entries);
  for (const [key, value] of entries) {
    if (value === expectedValue) {
      result.push(key);
    }
  }

  return result;
};

console.log(findKeys(lessonMembers, 10)); // ['foreach', 'operations']
findKeys(lessonMembers, 3);
