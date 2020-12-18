'use strict';

// function

function hello() {
  console.log('hello');
}

hello();

function log(msg) {
  console.log(msg);
}

log('hi');

// parameters
function changeName(obj) {
  obj.name = 'coder';
}

const pionari = { name: 'pionari' };
changeName(pionari);
console.log(changeName); // name : 'coder'

// Default parameter (ES6)
function showMsg(msg, from) {
  console.log(`${msg} by ${from}`);
}

showMsg('Hi'); // HI by undefiend 출력

//Rest Parameters (ES6)
function printAll(...args) {
  for (let i = 0; i < arguments.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printAll('hi ', 'my name is ', 'pionari');

// first-class function
// 함수는 변수에 할당 가능하다 !

// 익명함수 (함수명 X)
const pring = function () {
  console.log('print');
};

print();
const printAgain = print;

printAgain();

// Callback function
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

function printYes() {
  console.log('YES');
}

function printNo() {
  console.log('NO');
}

randomQuiz('worng', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// 항상 익명함수

// const simplePrint = function () {
//   console.log('simplePrint!');
// };
// const simplePrint = () => console.log('simplePrint');
const simplePrint = (a, b) => {
  return a + b;
};

// IIFE : 선언과 동시에 호출
(function hello() {
  console.log('IIFE');
});
