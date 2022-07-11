/*Реализуйте и экспортируйте по умолчанию функцию, 
которая высчитывает среднее арифметическое элементов переданного массива. 
Благодаря этой функции мы наконец-то посчитаем среднюю температуру по больнице :)
В случае пустого массива функция должна вернуть значение null (используйте в коде для этого guard expression):
const temperatures = [];
calculateAverage(temperatures); // null
*/
/**
 *
 * @param {Array<number>} arr
 * @returns {number}
 */
const calculateAverage = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  let middleTemp = 0;
  for (const sumTemp of arr) {
    middleTemp += sumTemp;
  }
  return middleTemp / arr.length;
};

console.log(calculateAverage([]));
