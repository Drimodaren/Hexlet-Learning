/*Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из массива элемент по указанному индексу, 
если индекс существует, либо возвращает значение по умолчанию. Функция принимает на вход три аргумента:

Массив
Индекс
Значение по умолчанию (равно null)

Для параметров функции можно указывать значения по умолчанию прям при объявлении: (param = 'default value')
*/
/**
 *
 * @param {Array<any>} arr
 * @param {number} index
 * @param {any} param
 * @return {any}
 */
const get = (arr, index, param = null) => {
  console.log(arr.length);
  if (index >= 0 && index < arr.length) {
    return arr[index];
  }
  return param;
};
export default get;

const cities = ["moscow", "london", "berlin", "porto", "", null, undefined];

//console.log(get(cities, 4)) // null
// console.log(get(cities, 1)) // 'london'
// console.log(get(cities, 10, 'paris')) // 'paris'
// console.log(get(cities, -1, 'oops')) // 'oops'
console.log(get(cities, 6, "default"));
console.log(get(cities, 0, "default"));
