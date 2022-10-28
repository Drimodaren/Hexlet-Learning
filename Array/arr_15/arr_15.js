/*Реализуйте и экспортируйте по умолчанию функцию, которая получает на вход строку и считает,
 сколько символов (без учёта повторяющихся символов) использовано в этой строке.
  Например, в строке yy используется всего один символ — y. 
  А в строке 111yya! — используется четыре символа: 1, y, a и !.
  Примеры:
const text1 = 'yyab'; // y, a, b
countUniqChars(text1); // 3
 
const text2 = 'You know nothing Jon Snow';
countUniqChars(text2); // 13
 
// Если передана пустая строка, то функция должна вернуть `0`
const text3 = '';
countUniqChars(text3); // 0
*/
/**
 *
 * @param {string} text
 * @returns {number}
 */

const countUniqChars = (text) => {
  let result = 0;
  let textArr = text.split("");
  let textArr1 = text.split("");
  let lastText = _.intersection(textArr, textArr1)
  console.log(lastText);
  for (let i = 0; i < lastText.length; i++) {
    result +=1 ;
  }

  return result;
};

console.log(countUniqChars("")); // 3

/*// BEGIN
const countUniqChars = (text) => {
  const uniqChars = [];

  for (const char of text) {
    if (!uniqChars.includes(char)) {
      uniqChars.push(char);
    }
  }

  return uniqChars.length;
};

export default countUniqChars;
// END*/