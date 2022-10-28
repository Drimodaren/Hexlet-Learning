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
  let arrUn1 = _.uniq(arr1);
  let arrUn2 = _.uniq(arr2);
  console.log(arrUn1);
  for (let i = 0; i < arrUn1.length; i++) {
    for (let j = 0; j < arrUn2.length; j++) {
      if (arrUn1[i] === arrUn2[j]) {
        console.log(arrUn1);
        console.log(arrUn2);
        console.log(result);
        result += 1;
      } else {
        result += 0;
      }
    }
  }
  return result;
};

console.log(getSameCount([1, 2, 3], [2, 8, 10])); //1;
console.log(getSameCount([1, 1, 1, 2, 3], [1, 1])); // 1
console.log(getSameCount([1, 1, 2, 3], [2, 3])); //2
