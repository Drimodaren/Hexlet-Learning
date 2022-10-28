/*
"Счастливым" называют билет с номером, в котором сумма первой половины цифр равна сумме второй половины цифр.
 Номера могут быть произвольной длины, с единственным условием, что количество цифр всегда чётно,
  например: 33 или 2341 и так далее.

Билет с номером 385916 — счастливый, так как 3 + 8 + 5 === 9 + 1 + 6. 
Билет с номером 231002 не является счастливым, так как 2 + 3 + 1 !== 0 + 0 + 2.
Реализуйте и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер — всегда строка).
 Функция должна возвращать true, если билет счастливый, или false, если нет.

Примеры использования:

isHappyTicket('385916'); // true
isHappyTicket('231002'); // false
isHappyTicket('1222');   // false
isHappyTicket('054702'); // true
isHappyTicket('00');     // true
*/

const isHappyTicket = (ticket) => {
  let element = 0;
  let element1 = 0;
  if (ticket.length % 2 === 0) {
    for (let i = 0; i < ticket.length / 2; i++) {
      element += Number(ticket[i]);
      //console.log(element);
    }
    for (let i = ticket.length / 2; i < ticket.length; i++) {
      element1 += Number(ticket[i]);
      //console.log(element1);
    }
  }
  if (element === element1) {
    return true;
  } else {
    return false;
  }
};
console.log(isHappyTicket("00"));

/*
Решение учителя

// @ts-check
// BEGIN
export default (num) => {
  let balance = 0;

  for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
    balance += +num[i] - +num[j];
  }
  return balance === 0;
};
// END
*/
