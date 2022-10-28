/*
Создайте функцию isPerfect(), которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.

Совершенное число — положительное целое число, равное сумме его положительных делителей (не считая само число). 
Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.
*/

const isPerfect=(perfNumber)=>{
  if (perfNumber===0) {
    return false
  }
  let sum = 0
for (let i = 0; i < perfNumber; i++) {
  
  if (perfNumber%i===0) {
    sum += i
  }
}
if (sum===perfNumber) {
  return true
}
else {return false}

}

console.log(isPerfect(0));