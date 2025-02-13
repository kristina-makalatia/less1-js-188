// variables- primitive types

let userName = "anna"; //string
let userAge = 18; // number
let userStatus = true; //boolean
let userInfo = null; //null
let userInfoNew; //undefined

console.log(typeof userInfo);

let number1 = 5;
let number2 = 10;
let sum = number1 + number2;
console.log(sum);

let item1 = "Hello";
let item2 = "World";
let newValue = item1 + " " + item2;
console.log(newValue);

//
let item3 = 10;
// item3 = item3 + 5;
item3 += 5;
console.log(item3);

//
console.log(1 + "2" + "3"); //123

let x = true;
console.log(!x);

//
let element = 15;

if (element > 20) {
  console.log("hello1");
} else if (element > 5 && element < 10) {
  console.log("hello2");
} else if (element > 8) {
  console.log("hello3");
} else if (element > 10) {
  console.log("hello4");
} else {
  console.log("error");
}
