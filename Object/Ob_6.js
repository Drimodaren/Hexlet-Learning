import _ from 'lodash';
// Реализуйте и экспортируйте по умолчанию функцию, которая считает количество слов в предложении,
// и возвращает объект. В объекте свойства — это слова (приведенные к нижнему регистру),
// а значения — это то, сколько раз слово встретилось в предложении.
// Слова в предложении могут находиться в разных регистрах.
// Перед подсчетом их нужно приводить в нижний регистр, чтобы не пропускались дубли.

// import countWords from './words.js';

// // Если предложение пустое, то возвращается пустой объект
// countWords('');
// // {}

// const text1 = 'one two three two ONE one wow';
// countWords(text1);
// // {
// //   one: 3,
// //   two: 2,
// //   three: 1,
// //   wow: 1,
// // }

// const text2 = 'another one sentence with strange Words words';
// countWords(text2);
// // {
// //   another: 1,
// //   one: 1,
// //   sentence: 1,
// //   with: 1,
// //   strange: 1,
// //   words: 2,
// // }

const countWords = (count) => {
  let lowCount = count.toLowerCase();
  let arrCount = _.words(lowCount);
  const result = {};

  for (const name of arrCount) {
    if (result[name] === undefined) {
      result[name] = 1;
    } else {
      result[name] += 1;
    }
  }

  return result;
};
console.log(countWords('one two three two ONE one wow'));
