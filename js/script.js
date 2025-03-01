"use strict";

//lesson 1
// variables- primitive types

// let userName = "anna"; //string
// let userAge = 18; // number
// let userStatus = true; //boolean
// let userInfo = null; //null
// let userInfoNew; //undefined

// console.log(typeof userInfo);

// let number1 = 5;
// let number2 = 10;
// let sum = number1 + number2;
// console.log(sum);

// let item1 = "Hello";
// let item2 = "World";
// let newValue = item1 + " " + item2;
// console.log(newValue);

// //
// let item3 = 10;
// // item3 = item3 + 5;
// item3 += 5;
// console.log(item3);

// //
// console.log(1 + "2" + "3"); //123

// let x = true;
// console.log(!x);

// //
// let element = 15;

// if (element > 20) {
//   console.log("hello1");
// } else if (element > 5 && element < 10) {
//   console.log("hello2");
// } else if (element > 8) {
//   console.log("hello3");
// } else if (element > 10) {
//   console.log("hello4");
// } else {
//   console.log("error");
// }

// lesson 2
// console.log(5 == "10"); //false
// console.log(5 === "5"); //false

// //
// console.log(true && false); //false
// console.log(true && true); //true
// console.log(true && 100); //hello world

// // ---------------
// console.log(true || false); // true
// console.log(false || false); //false
// console.log(false || true); //true

// // false values ->
// // false; " "; undefined; 0; null; NaN;

// // type conversion
// // 1. explicit
// let item1 = true.toString();

// console.log(item1);
// console.log(typeof item1); //string
// console.log(item1.length); //4

// let item2 = Number("10");
// console.log(item2);
// console.log(typeof item2); //number
// console.log(item2.length); //undefined

// // ----
// let item3 = Number(false);
// let item4 = Number(true);
// let item5 = Number(null);
// let item6 = Number("Hello");

// console.log(item3); //0
// console.log(item4); //1
// console.log(item5); //0
// console.log(item6); //NaN

// // 2.implicit conversion
// let x = 10;
// let y = "5";
// let result = x / y;

// console.log(result); //5
// console.log(typeof result); //number

// // exmaple 1
// let itemNew = 15;

// if (itemNew < 10) {
//   console.log("hello");
// } else {
//   console.log("Error");
// }

// //ternary operator ?

// let resultCondition = itemNew > 10 ? "Hello" : "error";
// console.log(resultCondition);

// // exmaple 2
// let number = 20;

// if (number < 10) {
//   console.log("Hello1");
// } else if (number > 15 && number < 18) {
//   console.log("hello2");
// } else if (number > 12) {
//   console.log("hello3");
// } else {
//   console.log("New ERROr");
// }

// //ternary operator
// let newResultCondition =
//   number < 10
//     ? "hello1"
//     : number > 15 && number < 18
//     ? "hello2"
//     : number > 12
//     ? "hello3"
//     : "new Error";
// console.log(newResultCondition);

// // object data types
// //1. array -
// let usersNames = ["anna", "nika", "nini", "mariami"];
// //                 0         1       2        3

// console.log(usersNames[0]);
// console.log(usersNames.length);
// console.log(usersNames[2]);
// console.log(usersNames[usersNames.length - 2]);

// //nested array
// let usersNewNames = ["oto", "mari", ["anna", "mariami"], "beka"];
// //                     0       1             2             3

// console.log(usersNewNames[2][1]);

// // 2. object
// let studentInfo = {
//   studentName: "anna",
//   studentAge: 19,
//   studentStatus: "active",
//   studentNumber: {
//     code: 599,
//     tel: 545454,
//   },
//   studentHobbies: ["music", "dance", "travel"],
//   studentComments: [
//     {
//       id: 1,
//       text: "Hello Wordl 1",
//     },
//     {
//       id: 2,
//       text: "Hello Wordl 2",
//     },
//   ],
// };

// // 1. dot notation
// console.log(studentInfo.studentComments[0].text);

// // 2. bracket notation
// console.log(studentInfo["studentComments"][0]["text"]);

// console.log(studentInfo.length);

// //
// let userNewObj = {
//   fname: "nini",
//   age: 18,
// };

// userNewObj.age = 19;
// userNewObj.gender = "female";
// delete userNewObj.fname;

// console.log(userNewObj);

// // loop array
// // 1. for loop
// let array = ["html", "css", "javascript", "bootstrap", 'python'];

// for (let item = 0; item < array.length; item++) {
//   console.log(array[item]);
// }

//
// item ++;
// item = item + 1
// item += 1;

//lesson 3
//prompt
// let result = Number(prompt("ENter Your Age"));
// console.log(result);
// console.log(typeof result);

// if (result < 18) {
//   console.log("not adult");
// } else {
//   console.log("adult");
// }

// if (result % 2 === 0) {
//   console.log("luwia");
// } else {
//   console.log("kenti");
// }

//loop
// let array = ["html", "css", "javascript", "bootstrap", "python"];

// for (let item = 0; item < array.length; item++) {
//   console.log(array[item]);
// }

// //h.w - 10
// let array8 = [
//   [2, -3, 5, 11],
//   [1, -35, -11],
//   [12, -36, -24],
// ];

// for (let i = 0; i < array8.length; i++) {
//   const nestedArray = array8[i];
//   // console.log(nestedArray); // [2, -3, 5, 11] [1, -35, -11] [12, -36, -24]

//   for (let element = 0; element < nestedArray.length; element++) {
//     const savedElement = nestedArray[element];
//     // console.log(nestedArray[element]); //2 -3 5 11 1 ...
//     if (savedElement > 0) {
//       console.log(savedElement);
//     }
//   }
// }

// for (let element of array8) {
//   // console.log(element); // [] [] []
//   for (let item of element) {
//     // console.log(item);
//     if (item > 0) {
//       console.log(item);
//     }
//   }
// }

// 1. for loop
// 2. while loop
// let newlangauges = ["html", "php", "nodeJS"];

// let newELement = 0;
// while (newELement < newlangauges.length) {
//   console.log(newlangauges[newELement]);
//   newELement++;
// }

// //
// let i = 1;

// while (i < 10) {
//   console.log(i);
//   i++;
//   if (i === 8) {
//     break;
//   }
// }

// // 3. for of ->  values
// let langauges = ["html", "php", "nodeJS"];

// for (let item of langauges) {
//   // console.log(item);
//   if (item.length > 4) {
//     console.log(item);
//   }
// }

// // 4. for in -> key
// let langauges2 = ["html", "php", "nodeJS"];

// for (let key in langauges2) {
//   console.log(key);
// }

// //
// let numbersArray = [25, 35, 16, 100, 12];

// for (let item of numbersArray) {
//   if (item === 100) {
//     continue;
//   }
//   console.log(item);
// }

// //
// for (let i = 0; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i); //0 1 2 4 5
// }

// //
// let arraynew = ["apple", "mango", 10, 25, "banana"];

// for (let i = 0; i < arraynew.length; i++) {
//   // console.log(arraynew[i]);
//   if (typeof arraynew[i] === "string") {
//     console.log(arraynew[i]);
//   }
// }

// for (let item of arraynew) {
//   if (typeof item === "string") {
//     console.log(item);
//   }
// }

// //h.w. - 9
// let array7 = [32, 14, null, "40", 50];

// for (let el of array7) {
//   // console.log(el);
//   if (typeof el === "number" && el % 5 === 0) {
//     console.log(el);
//   }
// }

// //3 & 4
// let array2 = [1, 2, 3, 4, 5];

// let sum = 0;
// for (let item of array2) {
//   // sum = sum + item;
//   sum += item;
// }

// let resultNew = sum / array2.length;

// console.log(sum);
// console.log(resultNew);

// // 7
// let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

// for (let item of array6) {
//   if (item % 2 == 1) {
//     console.log(item);
//   }
// }

// //
// let userInfo = {
//   fname: "anna",
//   age: 18,
// };

// let info = userInfo.fname + " " + "არის" + " " + userInfo.age + " " + "წლის";
// let info2 = `${userInfo.fname} არის ${userInfo.age} წლის `;
// console.log(info);
// console.log(info2);

// // loop object

// let userInfo2 = {
//   fname: "anna",
//   age: 18,
// };

// for (let key in userInfo2) {
//   // console.log(key); // fname age
//   console.log(userInfo2[key]); // anna 18

// }

// lesson 4
//object.keys()
//object.values()
//object.entries()

// let newUserInfo = {
//   fname: "anna",
//   age: 18,
//   userstatus: true,
// };

// for (let item in newUserInfo) {
//   console.log(newUserInfo[item]);
// }

// console.log(Object.keys(newUserInfo)); //['fname', 'age', 'userstatus']

// for (let item of Object.keys(newUserInfo)) {
//   console.log(item); // fname age userstatus
// }

// //
// console.log(Object.values(newUserInfo)); //  ['anna', 18, true]

// for (let value of Object.values(newUserInfo)) {
//   console.log(value); //anna 18 true
// }

// //
// console.log(Object.entries(newUserInfo)); // [ ['fname', 'anna'], ['age', 18],['userstatus', true] ]

// for (let [key, value] of Object.entries(newUserInfo)) {
//   console.log(key);
//   console.log(value);
// }

// //functions
// // 1. function declaration - hoisted

// function firstFnc(a, b) {
//   return a + b;
// }

// let result1 = firstFnc(10, 5);
// let resultNew = firstFnc(100, 10);

// console.log(result1);
// console.log(resultNew);

// //2. function expression - not hoisted
// let secondFnc = function (x) {
//   return x;
// };

// let result2 = secondFnc("Hello 2");
// console.log(result2);

// // 3. arrow function - not hoisted
// let arrowFnc = (a) => {
//   return a;
// };

// let result3 = arrowFnc("Good Evening");
// console.log(result3);

// //var - hoisted
// //  let const - not hoisted

// ///-----
// function checkNumberFnc(number) {
//   if (number === 2) {
//     return "გამოძახებს დროს გადაეცი 2";
//   } else if (number === 5) {
//     return "გამოძახებს დროს გადაეცი 5";
//   }
//   return "error";
// }

// let resultNumber = checkNumberFnc(12);
// console.log(resultNumber);

// //
// function getAge1(birthYear, yearNow) {
//   let age = yearNow - birthYear;
//   return age;

//   // return yearNow - birthYear;
// }

// let resultAge1 = getAge1(2000, 2025);
// console.log(resultAge1);

// //
// let getAge2 = function (birthYear, yearNow) {
//   return yearNow - birthYear;
// };

// let resultAge2 = getAge2(2002, 2025);
// console.log(resultAge2);

// //
// let getAge3 = (birthYear, yearNow) => {
//   let age = yearNow - birthYear;
//   // if (age < 18) {
//   //   return "არასრულწლოვანი";
//   // }
//   // return "სრულწლოვანი";
//   let ageNewResult = age < 18 ? "არასრულწლოვანი" : "სრულწლოვანი";
//   return ageNewResult;
// };

// let resultAge3 = getAge3(1999, 2025);
// let resultAge4 = getAge3(2020, 2025);

// console.log(resultAge3);
// console.log(resultAge4);

// //
// function sum(...numbers) {
//   let sum = 0;
//   for (let item of numbers) {
//     sum = sum + item;
//   }
//   return sum;
// }

// let sumResult = sum(10, 100, 14, 8, 7, 36, 23);
// let sumResult2 = sum(5, 10, 20);

// console.log(sumResult);
// console.log(sumResult2);

// // scope

// // 1. global scope
// let firstName = "nini";

// // 2. function scope = local scope
// function getAgeNew(birthYear) {
//   let yearNow = 2025;
//   let age = yearNow - birthYear;
//   console.log(age);

//   return age;
// }

// let newFncAgeResult = getAgeNew(2000);
// console.log(newFncAgeResult);
// // console.log(age); // error
// // console.log(yearNow); //error

// // 3. block scope

// let birthAge = 25;
// if (birthAge > 18) {
//   let isAdult = true;
//   console.log(isAdult); //true
// }
// // console.log(isAdult); //error

// //var - function scoped
// // let & const - block scoped & function scoped

// ///
// function getAgeScope(birthYear) {
//   let age = 2025 - birthYear;

//   function printAge() {
//     let info = `You are ${age}, born in ${birthYear}`;
//     console.log(info); //1

//     if (age > 18) {
//       var adult = "is Adult";
//       console.log(adult); //2
//     }
// console.log(adult);
//   }
// console.log(adult);

//   printAge();
//   return age;
// }

// let resultNewFnc = getAgeScope(2002);
// console.log("dabrunebuli value =", resultNewFnc); //3

// // console.log(age); // error
// // console.log(info); //eror

//lesson 5
// h.w
// 2.
let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

let user2 = {
  firstname: "anna",
  lastname: "ragaca",
  age: 12,
  isloggedin: false,
};

function printName(obj) {
  if (obj.isloggedin) {
    // return obj.firstname + " " + obj.lastname;
    return `${obj.firstname} ${obj.lastname}`;
  }
  return false;
}

let resultObj = printName(user);
let resultObj2 = printName(user2);

console.log(resultObj);
console.log(resultObj2);

// 3.
function maxValue(...numbers) {
  console.log(Math.max(...numbers));
}

maxValue(8, 120, 36, 25, 19, 26);

///
function getMaxValue(...numbersArray) {
  let maxValue = 0;
  for (let item of numbersArray) {
    if (item > maxValue) {
      maxValue = item;
    }
  }

  return maxValue;
}

let maxValueResult = getMaxValue(8, 120, 36, 25, 19, 26);
console.log(maxValueResult);

//closure

let y = 100;

function outside(x) {
  let y = 200;
  function inside() {
    let y = 300; //+
    return x + x + y;
  }

  return inside;
}

let resultNew = outside(10);
let resultNew2 = outside(20);
console.log(resultNew); //insdie function

let insideResult = resultNew();
console.log(insideResult); //10 + 10 = 20

let insideResult2 = resultNew2();
console.log(insideResult2); // 20 + 20 = 40

// if (true) {
//   const a = 150;
// }

// console.log(a); // error

//array methods
// foreach
let array = ["html", "css", "js", "python"];

for (let item of array) {
  if (item.length > 4) {
    console.log(item);
  }
}

array.forEach((x) => {
  if (x.length > 4) {
    console.log(x);
  }
});

//
// let fruits = ["banana", "apple", "mango"];

// fruits.unshift("orange");
// console.log(fruits); //vamatebt privel adgilas

// fruits.push("strawberry");
// console.log(fruits);

//fruits.shift();
// console.log(fruits); //washlis pirvel elements

// fruits.pop();
// console.log(fruits); //washlis bolo elements

//splice
let fruitsNewArray = ["banana", "apple", "mango", "kiwi"];

// fruitsNewArray.splice(1, 2);
// console.log(fruitsNewArray); //[banana, kiwi]

// let deletedValues = fruitsNewArray.splice(1, 2);
// console.log(deletedValues);

// fruitsNewArray.splice(2, 1, 'strawberry');
// console.log(fruitsNewArray);

// fruitsNewArray.splice(2, 0, "bootstrap");
// console.log(fruitsNewArray);

fruitsNewArray.splice(-2, 1, "orange");
console.log(fruitsNewArray);

//slice
let fruits2 = ["orange", "kiwi", "mango", "lemon"];

let fruitsNewArraySlice = fruits2.slice(1, 3);
console.log(fruitsNewArraySlice);

//map
let numbers = [10, 25, 36, 14, 20];

let newNumbersMap = numbers.map(function (item) {
  return item * 3;
});

let newNumbersMap2 = numbers.map((y) => y * 3);

console.log(newNumbersMap);
console.log(newNumbersMap2);

let fruitsMapArray = ["apple", "banana", "kiwi"];
let fruitsMapArrayNew2 = fruitsMapArray.map((item) => item.toUpperCase());

console.log(fruitsMapArrayNew2);

let numberArray = [1, 2, 3];
let newnumberArrayMap = numberArray.map((item) => Math.pow(item, 2));
console.log(newnumberArrayMap);

let numberArray2 = [16, 121, 100];
let newnumberArray2 = numberArray2.map((item) => Math.sqrt(item));
console.log(newnumberArray2);

//filter
let numbersFilter = [13, 25, 8, 3, 7];

let numbersFilterArrayNew = numbersFilter.filter(function (number) {
  return number > 10;
});

let numbersFilterArrayNew2 = numbersFilter.filter((number) => number > 10);

console.log(numbersFilterArrayNew);
console.log(numbersFilterArrayNew2);

//reverse
let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];
languages.reverse();

console.log(languages);

// indexOf
let languages2 = ["JavaScript", "Python", "C++", "Java", "Lua"];
let IndexValue = languages2.indexOf("Python");
console.log(IndexValue);

//concat
let names1 = ["anna", "nini", "lasha"];
let names2 = ["levani", "beka"];

let concatArray = names1.concat(names2);
console.log(concatArray);

// reduce
// let nestedArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ].reduce(function (accumulator, currentValue) {
//   return accumulator.concat(currentValue);
//   //  [].concat([1, 2],) -> [1,2]
//   // [1,2].concat([3, 4]) -> [1,2,3,4]
//   // [1,2,3,4].concat( [5, 6]) ->[1, 2 , 3 , 4, 5 ,6]
// },[]);

// console.log(nestedArray);//[ 1,2,3,4,5,6]

//
let arrayNestedNew = [
  [12, -3, 4],
  [15, -10],
  [100, -6],
].reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);

console.log(arrayNestedNew); //[12, -3, 4, 15, 10...]

let filteredArray = arrayNestedNew.filter((item) => item > 0);
console.log(filteredArray);

// string methods
let string = "    Hello     ";

console.log(string.length); //5
console.log(string.startsWith("h")); //false
console.log(string.startsWith("H")); //true
console.log(string.endsWith("a")); //false
console.log(string.toUpperCase()); //HELLO
console.log(string.toLowerCase()); //hello

console.log(string.trim());

//
let fname = "anna";
let lname = "ragaca";
let resultConcat = fname.concat(" ", lname);
console.log(resultConcat);

//
let stringNew = "Hello";
console.log(stringNew.indexOf("e")); //1
console.log(stringNew.indexOf("a")); // -1

console.log(stringNew.charAt(2)); //l
console.log(stringNew.charAt(stringNew.length - 1)); //o

//
let str = "hello";

let result1 = str.split(""); //["h", "e", "l", "l", "o"];
let result2 = result1.reverse();
let result3 = result2.join("");

//
let result = str.split("").reverse().join("");

console.log(result); //
