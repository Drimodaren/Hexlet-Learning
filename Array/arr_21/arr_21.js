// Реализуйте и экспортируйте функцию flatten().
//Эта функция принимает на вход массив и выпрямляет его:
//если элементами массива являются массивы, то flatten сводит всё к одному массиву,
// раскрывая один уровень вложенности.

// В js эта функция реализована как метод flat() у массивов. Его использовать нельзя.

// import { flatten } from '../arrays.js';

// // Для пустого массива возвращается []
// flatten([]); // []
// flatten([1, [3, 2], 9]); // [1, 3, 2, 9]
// flatten([1, [[2], [3]], [9]]); // [1, [2], [3], 9]
// Реализуйте добавление элементов вложенного массива в результирующий через spread-оператор.

const flatten = (arr) => {
  if (arr.length === 0) {
    return []
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === typeof arr) {
      result.push(...arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(flatten([1, [3, 2], 9]));
console.log(flatten([1, [[2], [3]], [9]]));
console.log(flatten([]))