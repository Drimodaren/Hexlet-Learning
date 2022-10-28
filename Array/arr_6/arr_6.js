/*
Реализуйте и экспортируйте функцию reverse(), 
которая принимает на вход массив и располагает элементы исходного массива в обратном порядке.
Решение этой задачи подразумевает самостоятельную 
реализацию функции без использования встроенного метода reverse().
Для решения этой задачи, проще всего брать и менять местами элементы 
стоящие на зеркальных местах: первый и последний, второй и предпоследний и так далее до середины.
*/
/**
 *
 * @param {Array<any>} arr
 * @return {Array<any>}
 */
export const reverse = (arr) => {
  let arrLength = arr.length;
  for (let i = 0; i < arrLength/2; i++) {
    const temp1 = arr[arr.length - i - 1];
    const temp2 = arr[i];
    console.log(temp1);
    console.log(temp2);
    arr[i] = temp1
    arr[arr.length-i-1]=temp2
  }
  return arr;
};

console.log(reverse(["john", "smith", "karl", "urtl"])); // => ['john', 'smith', 'karl']
