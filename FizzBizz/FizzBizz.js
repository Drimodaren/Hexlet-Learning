/*
Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log) в терминал числа в диапазоне
 от begin до end. При этом:

Если число делится без остатка на 3, то вместо него выводится слово Fizz
Если число делится без остатка на 5, то вместо него выводится слово Buzz
Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
В остальных случаях выводится само число
Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно). 
Для простоты считаем, что эти параметры являются целыми числами больше нуля. 
Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.

Вызов функции:
fizzBuzz(11, 20);

Вывод в терминале:
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
*/

const FizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      //console.log(i);
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      //console.log(i);
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log(i);
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
console.log(FizzBuzz(11, 20));

/*
const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    const hasFizz = i % 3 === 0 ? 'Fizz' : '';
    const hasBuzz = i % 5 === 0 ? 'Buzz' : '';
    console.log(`${hasFizz}${hasBuzz}` || i);
  }
};
*/
