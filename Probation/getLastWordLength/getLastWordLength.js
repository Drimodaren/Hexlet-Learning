/*Реализуйте и экспортируйте по умолчанию функцию, которая возвращает длину последнего слова переданной на вход строки.
 Словом считается любая последовательность, не содержащая пробелов.

import getLastWordLength from './solution.js';

getLastWordLength(''); // 0

getLastWordLength('man in BlacK'); // 5

getLastWordLength('hello, world!  '); // 6
Подсказки
Убрать лишние пробелы поможет метод trim
*/

const getLastWordLength=(str)=>{
  let strTrim = str.trim()
let strArr = strTrim.split(' ')
let strLast = strArr.length-1
return strArr[strLast].length
}
export default getLastWordLength

console.log(getLastWordLength('hello, world!  ')); // 6);

// export default (str) => {
//   const words = str.trim().split(' ');
//   const lastWord = words.at(-1);
//   return lastWord.length;
// };