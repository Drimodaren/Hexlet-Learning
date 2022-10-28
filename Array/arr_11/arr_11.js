/*
Суперсерия Канада-СССР – это 8 товарищеских хоккейных матчей, 
проводившихся между командами СССР и Канады в 72 (первая суперсерия) и в 74 годах (вторая суперсерия).
 В этом задании вам предстоит написать функцию, которая вычисляет команду, выигравшую суперсерию.

superseries.js
Реализуйте и экспортируйте по умолчанию функцию, которая находит команду победителя для конкретной суперсерии. 
Победитель определяется как команда, у которой больше побед (не количество забитых шайб) в конкретной серии.
 Функция принимает на вход массив, в котором каждый элемент — это массив, 
 описывающий счет в конкретной игре (сколько шайб забила Канада и СССР). 
 Результат функции – название страны: 'canada', 'ussr'. 
 Если суперсерия закончилась в ничью, то нужно вернуть null.
 Решение учителя использует функцию Math.sign
 import getSuperSeriesWinner from './superseries.js'
// Первое число – сколько забила Канада
// Второе число – сколько забила СССР
const scores = [
  [3, 7], // Первая игра
  [4, 1], // Вторая игра
  [4, 4],
  [3, 5],
  [4, 5],
  [3, 2],
  [4, 3],
  [6, 5],
];
 
getSuperSeriesWinner(scores); // 'canada'
*/
/**
 *
 * @param {Array<any>} arr
 * @returns {string}
 */

const superseries = (arr) => {
  let winner = "";
  let canada = 0;
  let ussr = 0;

  for (let i = 0; i < arr.length; i++) {
    let game = [];
    game.push(arr[i]);
    console.log(game[0][0]);
    if (game[0][0] === game[0][1]) {
      canada += 0;
      ussr += 0;
    } else if (game[0][0] > game[0][1]) {
      canada += 1;
    } else if (game[0][0] < game[0][1]) {
      ussr += 1;
    }
    console.log(canada);
    console.log(ussr);
  }
  console.log(canada);
  console.log(ussr);
  if (canada > ussr) {
    winner = "canada";
    return winner;
  } else if (canada < ussr) {
    winner = "ussr";
  } else if (canada === ussr) {
    winner = null;
  }
  return winner;
};

console.log(
  superseries([
    [3, 3],
    [4, 1],
    [5, 8],
    [5, 5],
    [2, 3],
    [2, 5],
    [4, 4],
    [2, 3],
  ])
); // canada
