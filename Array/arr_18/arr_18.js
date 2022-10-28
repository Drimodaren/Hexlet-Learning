/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два отсортированных массива и находит их пересечение. 
Пересечение двух массивов A и B — это массив только с теми элементами A и B, которые одновременно принадлежат обоим массивам, без дублей.

Примеры
getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]); // [10, 24]
 
getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]); // []
 
getIntersectionOfSortedArrays([], [2]); // []
Алгоритм
Поиск пересечения двух неотсортированных массивов — операция, 
в рамках которой выполняется вложенный цикл с полной проверкой каждого элемента первого массива на вхождение во второй.

Сложность данного алгоритма O(n * m) (произведение n и m), где n и m — размерности массивов.
Если массивы отсортированы, то можно реализовать алгоритм, сложность которого уже O(n + m), что значительно лучше.

Суть алгоритма довольно проста. В коде вводятся два указателя (индекса) на каждый из массивов. 
Начальное значение каждого указателя 0. Затем идёт проверка элементов, находящихся под этими индексами в обоих массивах.
Если они совпадают, то значение заносится в результирующий массив, а оба индекса инкрементируются.
Если значение в первом массиве больше, чем во втором, то инкрементируется указатель второго массива, иначе — первого.
*/
const getIntersectionOfSortedArrays = (arr1,arr2) => {
  
  const result = []; 
  let result2 = []

  for (let i = 0; i<10; i++) {
    if (arr1.includes(arr2[i])) {
      result.push(arr2[i]);
    }

  
  result2 = result.filter((item, index) => {
    return result.indexOf(item) === index
  })


};
return result2
}
export default getIntersectionOfSortedArrays
console.log(getIntersectionOfSortedArrays([1, 1, 1, 2, 2, 2], [1, 1, 2, 2, 3, 3]));


// const getIntersectionOfSortedArrays = (arr1, arr2) => {
//   const size1 = arr1.length;
//   const size2 = arr2.length;

//   let i1 = 0;
//   let i2 = 0;
//   const result = [];

//   while (i1 < size1 && i2 < size2) {
//     const lastCommon = result[result.length - 1];
//     if (arr1[i1] === arr2[i2] && arr1[i1] !== lastCommon) {
//       result.push(arr1[i1]);
//       i1 += 1;
//       i2 += 1;
//     } else if (arr1[i1] > arr2[i2]) {
//       i2 += 1;
//     } else {
//       i1 += 1;
//     }
//   }

//   return result;
// };

// export default getIntersectionOfSortedArrays;
