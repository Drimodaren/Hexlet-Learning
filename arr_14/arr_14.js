/*
Реализуйте и экспортируйте по умолчанию функцию, 
принимающую на вход два массива и возвращающую количество общих уникальных значений в обоих массивах.
// Общие уникальные элементы: 1, 3, 2
getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]); // 3
 
// Общие уникальные элементы: 4
getSameCount([1, 4, 4], [4, 8, 4]); // 1
 
// Общие уникальные элементы: 1, 10
getSameCount([1, 10, 3], [10, 100, 35, 1]); // 2
 
// Нет элементов
getSameCount([], []); // 0

Подсказки
Для получения массива без повторяющихся элементов, используйте uniq из библиотеки lodash.
В целях обучения и прокачки, решите это упражнение с помощью вложенных циклов.
*/
/**
 *
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {number}
 */

const getSameCount = (arr1, arr2) => {
  let result = 0;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1.includes(arr2[j])) {
        result += 1;
      }
    }
  }
  console.log(typeof result);
  return result;
};

console.log(getSameCount([1, 3], [3])); // 3
