/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и строковой префикс,
и возвращает новый массив, в котором к каждому элементу исходного массива добавляется переданный префикс. 
Функция предназначена для работы со строковыми элементами. 
После префикса должен добавляться пробел.
*/
/**
 *
 * @param {Array<any>} arr
 * @param {any} prefix
 * @return {Array<any>}
 */

const addPrefix = (arr, prefix) => {
  let newArrWitchPrefix = [];
  console.log(typeof arr);
  for (let i = 0; i < arr.length; i++) {
    newArrWitchPrefix.push(prefix + " " + arr[i]);
  }
  return newArrWitchPrefix;
};
export default addPrefix;

console.log(addPrefix(["john", "smith", "karl"], "Mr"));
