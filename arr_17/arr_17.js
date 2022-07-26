/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку,
состоящую только из открывающих и закрывающих скобок разных типов, и проверяет, 
является ли эта строка сбалансированной. Открывающие и закрывающие скобки должны быть одного вида. 
Пустая строка (отсутствие скобок) считается сбалансированной.

Строка считается корректной (сбалансированной),
если содержащаяся в ней скобочная структура соответствует требованиям:

Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
Скобки должны закрываться в правильном порядке.
// Пример вложенности
isBracketStructureBalanced('(>');  // false
isBracketStructureBalanced('()');  // true
isBracketStructureBalanced('[()]');  // true
isBracketStructureBalanced('({}[])');  // true
isBracketStructureBalanced('{<>}}'); // false
isBracketStructureBalanced('([)]'); // false
Функция должна поддерживать, минимум, четыре вида скобок: круглые — (), квадратные — [], фигурные — {} и угловые — <>.

Подсказки
Решение учителя использует метод indexOf
*/
const openBrackets = ["(", "[", "{", "<"];
const closeBrackets = [")", "]", "}", ">"];
const pairs = {
  "(": ")",
  "[": "]",
  "{": "}",
  "<": ">",
};
const checkIsBalanced = (expression) => {
  // Инициализация стека
  const stack = []; //'(','['
  // Проходим по каждому символу в строке
  for (const symbol of expression) {
    // Смотрим открывающий или закрывающий
    if (openBrackets.includes(symbol)) {
      stack.push(symbol);
    } else if (closeBrackets.includes(symbol)) {
      // Если для закрывающего не нашлось открывающего, значит баланса нет
      // if (!stack.pop()) {
      //           return false;
      // }
      const arr = stack.pop();
      if (!arr) {
        return false;
      }
      console.log(pairs[arr]);
      if (symbol !== pairs[arr]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
console.log(checkIsBalanced("([)]"));

const arr = [1, 2, 3];
console.log(arr);
const arr1 = arr.pop();
console.log(arr1);
console.log(arr);
const arr2 = arr.pop();
console.log(arr2);
console.log(arr);
const arr3 = arr.pop();
console.log(arr3);
console.log(arr);
const arr4 = arr.pop();
console.log(!arr4);
console.log(arr);

// const openingSymbols = ['(', '[', '{', '<'];
// const closingSymbols = [')', ']', '}', '>'];

// // BEGIN
// const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
// const getClosingSymbolFor = (symbol) => closingSymbols[openingSymbols.indexOf(symbol)];

// export default (str) => {
//   const stack = [];
//   for (const symbol of str) {
//     if (isOpeningSymbol(symbol)) {
//       const closingSymbol = getClosingSymbolFor(symbol);
//       stack.push(closingSymbol);
//     } else {
//       const lastSavedSymbol = stack.pop();
//       if (symbol !== lastSavedSymbol) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };
