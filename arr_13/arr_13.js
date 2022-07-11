/*
Реализуйте и экспортируйте по умолчанию функцию, которая заменяет каждое вхождение
 указанных слов в предложении на последовательность $#%! и возвращает полученную строку. Аргументы:

Текст
Набор стоп слов

Словом считается любая непрерывная последовательность символов, включая любые спецсимволы (без пробелов).

import makeCensored from '../strings';
 
const sentence = 'When you play the game of thrones, you win or you die';
const result = makeCensored(sentence, ['die', 'play']);
// When you $#%! the game of thrones, you win or you $#%!
 
const sentence2 = 'chicken chicken? chicken! chicken';
const result2 = makeCensored(sentence2, ['?', 'chicken']);
// '$#%! chicken? chicken! $#%!';

Подсказки
Тернарная операция может сослужить вам хорошую службу в этой практике
Также может очень пригодиться метод includes()
*/
/**
 *
 * @param {string} text
 * @param {Array<any>} arrStopWord
 * @returns {string}
 */

const makeCensored = (text, arrStopWord) => {
  let result = "";
  let arrResult = [];
  console.log(arrStopWord[0]);
  let arrText = text.split(" ");
  console.log(arrText);
  console.log(arrText.includes("play"));
  for (let i = 0; i < arrText.length; i++) {
    if (arrStopWord.includes(arrText[i])) {
      arrResult.push("$#%!");
    } else {
      arrResult.push(arrText[i]);
    }
    console.log(arrResult);
  }
  result = arrResult.join(" ");

  return result;
};

console.log(makeCensored("When you play the game of thrones, you win or you die", ["play", "die"]));
// When you $#%! the game of thrones, you win or you $#%!

/*// BEGIN 
const capitalizeWords = (sentence,arr) => {
const separator = ' ' // Присваиваем в переменную по какому принципу будем отделять значения в строке. В данном случае разделителем будет пробел
let wordsArr = sentence.split(separator); //Непосредственно само раздлеление строки по методу split, в скобках указываем способ разделения. Идет возврат нового массива в words
for (let i = 0; i < wordsArr.length; i++) { //Запускаю цикл
  if (arr.includes(wordsArr[i])) { // в цикле через метод includes ищу совпадения с данными передаваемыми в arr с каждой позицией массива words (перебор позиций i)
    wordsArr.splice(i, 1, '$#%!') // Если он находит совпадение (true) то производит замену с помощью метода splice, где первая и вторая позиция через i задается место замены (с по), а третьим условием на что меняем
  }
}

const wordsStr = wordsArr.join(' ')// возвращаю обратно массив в строку
return wordsStr
};
export default capitalizeWords
// END
*/
