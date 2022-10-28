/*
Реализуйте и экспортируйте по умолчанию функцию, 
которая принимает на вход в виде массива кошелёк с деньгами и название валюты 
и возвращает сумму денег указанной валюты.

Реализуйте данную функцию используя управляющие инструкции.

Параметры функции:

Массив, содержащий купюры разных валют с различными номиналами
Наименование валюты
const money1 = [
  'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
];
getTotalAmount(money1, 'usd') // 16
Подсказки:
Названия валют состоят из 3-х символов.
Для преобразования строки в число используйте Number()
Для извлечения подстроки из строки используйте метод slice().
  const str = 'some text';
  str.slice(1, 6); // 'ome t'
  str.slice(7);    // 'xt'
*/
/**
 *
 * @param {Array<any>} arr
 * @returns {number}
 */
const getTotalAmount = (arr, money) => {
  console.log(arr);
  let money1 = 0;
  for (let i = 0; i < arr.length; i++) {
    let arrStr = arr[i].slice(0, 3);
    let arrNum = +arr[i].slice(4);
    console.log(arrStr);
    console.log(arrNum);
    if (arrStr === money) {
      money1 += arrNum;
    }
  }
  return money1;
};

console.log(getTotalAmount(["eur 10", "usd 1", "usd 10", "rub 50", "usd 5"], "usd"));
