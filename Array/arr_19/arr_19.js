/*
На многих картах, таких как google maps, реализован поиск мест, находящихся рядом с выбранной точкой, 
например, с текущим расположением. В этом задании мы реализуем подобную задачу в очень упрощённом варианте.

location.js
Реализуйте и экспортируйте функцию getTheNearestLocation(), 
которая находит ближайшее место к указанной точке на карте и возвращает его. Параметры функции:

locations – список мест на карте (массив). Каждое место – массив из двух элементов:
Первый элемент – это название места
Второй – точка на карте (массив из двух чисел-координат x и y)
point – текущая точка на карте
import { getTheNearestLocation } from '../location.js';
 
const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];
 
const currentPoint = [5, 5];
 
// Если мест нет, то возвращается null
getTheNearestLocation([], currentPoint); // null
 
getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]
Для решения этой задачи деструктуризация не нужна, но мы хотим её потренировать.
Поэтому решите эту задачу без обращения к индексам массивов.

Подсказки
Расстояние между точками высчитывается с помощью функции getDistance().
*/

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};
//const currentPoint = [5, 5];
export const getTheNearestLocation = (location, currentPoint) => {
  if (location.length === 0) {
    return null;
  } else {
    let result = [];
    let result2 = 0;
    let loc = [];
    const [x2, y2] = currentPoint;
    for (let i = 0; i < location.length; i++) {
      const [, [x1, y1]] = location[i];
      result.push(getDistance([x1, y1], [x2, y2]));
    }
    result2 = Math.min(...result);
    for (let i = 0; i < result.length; i++) {
      if (result[i] === result2) {
        loc = location[i];
        return loc;
      } else {
        loc = null;
      }
    }
    return loc;
  }
};

console.log(
  getTheNearestLocation(
    [
      ["Park", [10, 5]],
      ["Sea", [1, 3]],
      ["Museum", [8, 4]],
    ],
    [5, 5]
  )
);
console.log(getTheNearestLocation([], [5, 5]));
