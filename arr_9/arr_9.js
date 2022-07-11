/*Реализуйте функцию getSameParity(), которая принимает на вход массив чисел и возвращает новый, 
состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива. 
Экспортируйте функцию по умолчанию.

getSameParity([]);        // []
getSameParity([1, 2, 3]); // [1, 3]
getSameParity([1, 2, 8]); // [1]
getSameParity([2, 2, 8]); // [2, 2, 8]

Проверка чётности - остаток от деления: item % 2 === 0 — чётное число.
Если на вход функции передан пустой массив, то она должна вернуть пустой массив.
Для работы с отрицательными числами может понадобиться функция нахождения модуля Math.abs
Math.abs(-1); // 1
Math.abs(0); // 0
Math.abs(1); // 1
*/

/**
 *
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */

const getSameParity = (arr) => {
  let result = [];
  if (arr.length === 0) {
    return [];
  }
  let parity = Math.abs(arr[0] % 2);
  console.log(parity);
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Math.abs(element % 2) === parity) {
      result.push(element);
    }
  }
  return result;
};
console.log(getSameParity([3, 2, 3]));
