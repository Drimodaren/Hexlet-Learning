/*
Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает сумму всех элементов массива,
которые делятся без остатка на 3 (три).
*/
/**
 *
 * @param {number} arr
 * @return {number}
 */

const calculateSum = (arr) => {
  let sumThree = 0;
  console.log(arr);
  if (arr.length === 0) {
    return 0;
  }
  let deletThree = [];
  for (let i = 0; i < arr.length; i++) {
    deletThree = arr[i] % 3;
    if (deletThree === 0) {
      sumThree += arr[i];
    }
    console.log(deletThree);
  }
  return sumThree;
};

const coll1 = [2, 0, 17, 3, 9, 15, 4];
console.log(calculateSum(coll1)); // 48

//const coll2 = [2, 0, 17, 3, 9, 15, 4];
//calculateSum(coll2); // 27
