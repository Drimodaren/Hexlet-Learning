/*
Реализуйте и экспортируйте по умолчанию функцию, 
которая сортирует массив используя пузырьковую сортировку.
bubbleSort([]); // []
bubbleSort([3, 10, 4, 3]); // [3, 3, 4, 10]

*/
/**
 *
 * @param {Array<any>} arr
 * @returns {Array<any>}
 */

const bubbleSort = (arr) => {
  let arrleng = arr.length - 1;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arrleng; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        
      }
    }
    arrleng -= 1;
  } while (swapped);
  {
    return arr;
  }
};

console.log(bubbleSort([3, 10, 4, 3]));
