// Реализуйте и экспортируйте функцию getMax(), которая ищет в массиве максимальное значение и возвращает его.

// Примеры
// import { getMax } from '../arrays.js';

// // Для пустого массива возвращается null
// getMax([]); // null
// getMax([1, 10, 8]); // 10
// Эта функция реализуется просто и мы уже делали подобное ранее.
// Сейчас же мы учимся использовать rest-оператор.
// Используйте его вместе с деструктуризацией, для извлечения первого элемента и всех остальных.
// Первый элемент становится начальным значением максимального,
// а остальные перебираются в цикле для определения максимального.

const getMax = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  const [first, ...rest] = arr;
  let result = first;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (result < rest[j]) {
        result = rest[j];
      }
    }
  }
  return result;
};
console.log(getMax([1, 8, -3, 11]));