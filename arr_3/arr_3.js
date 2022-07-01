/*
Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива. 
Если массив содержит меньше двух элементов, то он возвращается как есть.
Чтобы поменять местами значения, нужно использовать третью переменную
*/

/**
 * @param {Array<any>} arr
 * @return {Array<any>}
 */
const swap = (arr) => {
  if (arr.length >= 2) {
    let firstEl = arr[0];
    let lastEl = arr[arr.length - 1];
    console.log(firstEl);
    console.log(lastEl);
    let finalEl = [lastEl, ...arr.slice(1, arr.length - 1), firstEl];
    return finalEl;
  }
  return arr;
};
export default swap;

// console.log(swap([])); // []
// console.log(swap([1])); // [1]
// console.log(swap([1, 2])); // [2, 1]
console.log(swap(["one", "two", "three"])); // ['three', 'two', 'one']
