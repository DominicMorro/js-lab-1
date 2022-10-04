"use strict";

const name = "Dominic Morro"; //string
let age = 22;
const birthday = "December 25";
let pineapplePizza = false; //boolean
const lifeEvents = [
  "I was born in Detroit",
  "I went to Schoolcraft College",
  "I climbed Lone Mountain when I was 18",
  "I love working from home",
]; //array

// [] = Array
// {} = Object

// if(condition --- decision/ fork in the road){
//if condition is true, code in this block is executed
//} else if (another condition){
//if the first condition is false, and this one is true, this code will be executed
// } else {
//else's default condition is that all other chained conditions evaluated to false
//}

//  === is for comparison
// = is for assignment or reassignment

if (pineapplePizza) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  const randomNumber = Math.floor(Math.random() * 10 + 1); // random number 1 - 10
  // console.log(randomNumber);
  if (randomNumber !== 5) {
    // counter += 1;
    counter++; // same thing as line above but shorthand version
    // template literal (backticks and ${})
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

// extended challenge

// let hours = 50;
// let wage = 10;
// let paycheck = 40 * wage;
// if (hours > 40) {
//   let overtimeHous = hours - 40;
//   console.log(overtimeHous);
//   overtime = overtimeHous * wage * 1.5;
//   console.log(overtimePay);
//   paycheck += overtime;
// }
// console.log(paycheck);

// extended challenge
let hours = 50;
let wage = 10;
let paycheck = 40 * wage;
if (hours > 40) {
  let overtimeHours = hours - 40;
  console.log(overtimeHours);
  let overtimePay = overtimeHours * wage * 1.5;
  console.log(overtimePay);
  paycheck += overtimePay;
  //   shorter version:
  //   paycheck += (hours - 40) * (wage * 1.5);
}
console.log(paycheck);

let weeks = 0;
weeks = Math.ceil(1000000 / paycheck);
console.log(`it would take ${weeks} weeks to earn one million bucks!`);
