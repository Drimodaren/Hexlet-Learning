const text = "When \t\n you play a \t\n game of thrones you win or you die.";
let text1 = text.slice(5, 15);
console.log(text1.length);
let text2 = text1.trim();
console.log(text2.length);
// BEGIN (write your solution here)
console.log(text.slice(5, 15).trim().length);

const capitalize = (str) => {
  let secondStr = str.slice(1, str.length);
  console.log(secondStr);
  let upperVowel = str[0].toUpperCase();
  return `${upperVowel}${secondStr}`;
};
console.log(capitalize("daie"));
console.log(2016 % 400);

const getLetter = (name, num) => {
  return name[num - 1] || "";
};
console.log(getLetter("Hexlet", 0));
console.log(0 || 1);

const isEven = (num) => {
  return num % 2 === 0;
};

// функция увеличивает полученное число num на 10
const increaseNum = (num) => {
  return num + 10;
};

const num = 6;

const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;
console.log(result);
console.log(isEven(17));
console.log(increaseNum(6));

let a = 4;
console.log((a -= 8 - a));

const mySubstr = (text, numLength) => {
  let i = 0;
  let result = "";
  while (i < numLength) {
    result = `${result}${text[i]}`;
    i += 1;
  }
  return result;
};
console.log(mySubstr("got", 2));

const countChars = (text, Symbol) => {
  let i = 0;
  let result = 0;
  let upperText = text.toUpperCase();
  console.log(upperText);
  let upperSymbol = Symbol.toUpperCase();
  console.log(upperSymbol);
  while (i <= text.length - 1) {
    if (upperText[i] === upperSymbol) {
      result += 1;
    }
    i += 1;
  }
  return result;
};
console.log(countChars("HexlEEt", "e"));

const makeItFunny = (text, num) => {
  let result = "";
  let i = 0;
  while (i < text.length) {
    if ((i + 1) % num === 0) {
      result = `${result}${text[i].toUpperCase()}`;
      i++;
    }
    result = `${result}${text[i]}`;
    i++;
  }
  return result;
};
console.log(makeItFunny("I never look back", 3));

const encrypt = (str) => {
  let result = "";
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i += 2) {
      result += str[i + 1] + str[i];
    }
  } else {
    for (let i = 0; i < str.length - 1; i += 2) {
      result += str[i + 1] + str[i];
    }
    result += str[str.length - 1];
  }
  return result;
};
console.log(encrypt("attaca"));
console.log(encrypt("12345"));

const getTriangleArea = (h, b) => {
  const Area = (1 / 2) * h * b;
  return Area;
};
console.log(getTriangleArea(15,12));


const arr1 = [1,2,3,4]
arr1[0]=5
console.log(arr1);