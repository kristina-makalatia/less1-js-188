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
let array = ["html", "css", "javascript", "bootstrap", "python"];

for (let item = 0; item < array.length; item++) {
  console.log(array[item]);
}

//h.w - 10
let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];

for (let i = 0; i < array8.length; i++) {
  const nestedArray = array8[i];
  // console.log(nestedArray); // [2, -3, 5, 11] [1, -35, -11] [12, -36, -24]

  for (let element = 0; element < nestedArray.length; element++) {
    const savedElement = nestedArray[element];
    // console.log(nestedArray[element]); //2 -3 5 11 1 ...
    if (savedElement > 0) {
      console.log(savedElement);
    }
  }
}

for (let element of array8) {
  // console.log(element); // [] [] []
  for (let item of element) {
    // console.log(item);
    if (item > 0) {
      console.log(item);
    }
  }
}

// 1. for loop
// 2. while loop
let newlangauges = ["html", "php", "nodeJS"];

let newELement = 0;
while (newELement < newlangauges.length) {
  console.log(newlangauges[newELement]);
  newELement++;
}

//
let i = 1;

while (i < 10) {
  console.log(i);
  i++;
  if (i === 8) {
    break;
  }
}

// 3. for of ->  values
let langauges = ["html", "php", "nodeJS"];

for (let item of langauges) {
  // console.log(item);
  if (item.length > 4) {
    console.log(item);
  }
}

// 4. for in -> key
let langauges2 = ["html", "php", "nodeJS"];

for (let key in langauges2) {
  console.log(key);
}

//
let numbersArray = [25, 35, 16, 100, 12];

for (let item of numbersArray) {
  if (item === 100) {
    continue;
  }
  console.log(item);
}

//
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i); //0 1 2 4 5
}

//
let arraynew = ["apple", "mango", 10, 25, "banana"];

for (let i = 0; i < arraynew.length; i++) {
  // console.log(arraynew[i]);
  if (typeof arraynew[i] === "string") {
    console.log(arraynew[i]);
  }
}

for (let item of arraynew) {
  if (typeof item === "string") {
    console.log(item);
  }
}

//h.w. - 9
let array7 = [32, 14, null, "40", 50];

for (let el of array7) {
  // console.log(el);
  if (typeof el === "number" && el % 5 === 0) {
    console.log(el);
  }
}

//3 & 4
let array2 = [1, 2, 3, 4, 5];

let sum = 0;
for (let item of array2) {
  // sum = sum + item;
  sum += item;
}

let resultNew = sum / array2.length;

console.log(sum);
console.log(resultNew);

// 7
let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (let item of array6) {
  if (item % 2 == 1) {
    console.log(item);
  }
}

//
let userInfo = {
  fname: "anna",
  age: 18,
};

let info = userInfo.fname + " " + "არის" + " " + userInfo.age + " " + "წლის";
let info2 = `${userInfo.fname} არის ${userInfo.age} წლის `;
console.log(info);
console.log(info2);

// loop object

let userInfo2 = {
  fname: "anna",
  age: 18,
};

for (let key in userInfo2) {
  // console.log(key); // fname age
  console.log(userInfo2[key]); // anna 18
  
}
