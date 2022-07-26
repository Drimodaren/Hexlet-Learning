/*Реализуйте и экспортируйте по умолчанию функцию, которая меняет в строке регистр каждой буквы на противоположный.

Примеры:

invertCase('Hello, World!'); // hELLO, wORLD!
invertCase('I loVe JS');     // i LOvE js
Подсказки
Чтобы узнать длину строки, используйте свойство length:
'welcome'.length; // 7
Чтобы получить строку (или отдельный символ) в верхнем регистре, используйте метод toUpperCase():
'foo'.toUpperCase(); // 'FOO';
'f'.toUpperCase();   // 'F';
Чтобы получить строку (или отдельный символ) в нижнем регистре, используйте метод toLowerCase():
'BAR'.toLowerCase(); // 'bar';
'b'.toLowerCase();   // 'b';
*/

const invertCase=(str)=>{
  let newStr=''
  for (let i = 0; i < str.length; i++) {
      if (str[i]===str[i].toUpperCase()) {
        newStr = `${newStr}${str[i].toLowerCase()}`
      }
      else {newStr =`${newStr}${str[i].toUpperCase()}`}
  }
  return newStr

}
export default invertCase
console.log(invertCase('Hello, World!'));

/*
const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const upper = str[i] === str[i].toUpperCase();
    result += upper ? str[i].toLowerCase() : str[i].toUpperCase();
  }

  return result;
};

export default invertCase;
*/