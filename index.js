// 1. Об’явити масив з довільними елементами. За допомогою циклу вивести всі елементи масиву послідовно в консоль
const randomArr = [5, 2, "Earth", { name: "User1" }];

for (let i = 0; i < randomArr.length; i++) {
  console.log(`${i}:`, randomArr[i]);
}
// or:
// randomArray.forEach((item, index) => console.log(`${index}: ${item}`, item));

// ------------------------------------------------------------------------------------------------
// 2. Дан масив з цілими числами. За допомогою циклу вивести елементи масива, які є парними числами
const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbersArr.length; i++) {
  if (numbersArr[i] % 2 === 0) {
    console.log(numbersArr[i]);
  }
}
// or:
// const evenNumbersArr = numbersArr.filter((item) => item % 2 === 0);
// console.log(evenNumbersArr);

// ------------------------------------------------------------------------------------------------
// (завдання на методи масивів):
// 3.  Дано два масива: [1, 2, 3] і [4, 5, 6]. Об'єднати їх разом
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log("arr3 :>> ", arr3);
// or
const arr4 = [...arr1, ...arr2];
console.log("arr4 :>> ", arr4);
// ------------------------------------------------------------------------------------------------
// 4. Даний масив [6, 5, 4]. Зробити з нього масив [4, 5,6]
const arrReverse = [6, 5, 4];
arrReverse.reverse();
console.log(arrReverse);
// or:
const newArr = arrReverse.toReversed();
console.log(newArr);

// ------------------------------------------------------------------------------------------------
// 5. Даний масив [1, 2, 3]. Додати йому в кінець елементи 4, 5, 6
const addToEndArr = [1, 2, 3];
addToEndArr.push(4, 5, 6);
console.log(addToEndArr);
// ------------------------------------------------------------------------------------------------
// 6. Даний масив [7, 8, 9]. Додати йому на початок 1, 2, 3
const addToStartArr = [7, 8, 9];
addToStartArr.unshift(1, 2, 3);
console.log(addToStartArr);

// ------------------------------------------------------------------------------------------------
// 7. Даний масив ['aaa', 'bbb', 'ccc']. Виведіть в консоль перший елемент та видаліть його.
const lettersArr1 = ["aaa", "bbb", "ccc"];
const deletedFirst = lettersArr1.shift();
console.log(deletedFirst);
console.log(lettersArr1);

// ------------------------------------------------------------------------------------------------
// 8. Даний масив ['aaa', 'bbb', 'ccc']. Виведіть в консоль та видаліть останній елемент
const lettersArr2 = ["aaa", "bbb", "ccc"];
const deletedLetters = lettersArr2.pop();
console.log(deletedLetters);
console.log(lettersArr2);

// ------------------------------------------------------------------------------------------------
// 9. Даний масив [9, 10, 11, 12, 13]. Скопіювати в новий масив елементи з другого по п'ятий
const oldArray = [9, 10, 11, 12, 13];
const newArray = oldArray.slice(1);
console.log(newArray);

// ------------------------------------------------------------------------------------------------
// 10. З масиву [1, 2, 3, 4, 5] зробити масив [1, 4, 5] (оригінальний має змінитись)
const spliceArr = [1, 2, 3, 4, 5];
spliceArr.splice(1, 2);
console.log(spliceArr);

// ------------------------------------------------------------------------------------------------
// 11. З масиву [1, 2, 3, 4, 5] скопіювати в новий масив [3, 4, 5]
const sliceArray = [1, 2, 3, 4, 5];
const newSliceArray = sliceArray.slice(2);
console.log(newSliceArray);

// ------------------------------------------------------------------------------------------------
// 12. З масиву  [1, 2, 3, 4, 5] (не однією командою) зробити масив [1, 'w', 'trtr', 2, 3, 4, 'vvv', 'a', 'hello']
const mixedArray = [1, 2, 3, 4, 5];
mixedArray.pop();
mixedArray.push("vvv", "a", "hello");
mixedArray.splice(1, 0, "w", "trtr");
console.log(mixedArray);

// ------------------------------------------------------------------------------------------------
// Таск з *:
// Написати функцію, яка приймає рядок і масив голосних літер, повертає кількість включень голосних у заданому рядку
function countVowels(str, vowelsArray) {
  return str
    .toLowerCase()
    .split("")
    .filter((char) => vowelsArray.includes(char)).length;
}
const vowelsArray = ["a", "e", "i", "o", "u", "y"];
console.log(countVowels("lorem ipsum dolor sit amet", vowelsArray));

// or:

function countVowels2(str, vowelsArray) {
  return str.split("").filter((char) => vowelsArray.includes(char)).length;
}
const vowelsArray2 = [
  "a",
  "e",
  "i",
  "o",
  "u",
  "y",
  "A",
  "E",
  "I",
  "O",
  "U",
  "Y",
];
console.log(countVowels2("A lorem ipsum dolor sit", vowelsArray2));
