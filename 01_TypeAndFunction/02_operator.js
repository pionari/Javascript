'use strict';

// 1. 문자열 더하기
console.log("i'm" + ' yoon');
console.log('1' + 2); // 12

// 2. 숫자 연산
console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(1 % 1); // 0
console.log(2 ** 3); // 8

// 3. 증감 연산
let counter = 2;
const preIncrment = ++counter;
console.log(preIncrment); // 3

const preDecrement = --counter;
console.log(preDecrement); // 2

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x+y;
x -= y; // x = x-y;

// 5. 비교연산
console.log(1 < 2);
console.log(1 <= 2);

// 6. Logical operators
const value1 = false;
const value2 = 2 < 4;

function check() {
  console.log('확인');
  return true;
}

// ||(or) : 하나라도 true면 true가 출력
console.log(value1 || value2 || check()); // false or false or true = true
console.log(check() || value1 || value2); // false or false or true = true
// check()가 true를 리턴하므로 뒤는 연산되지 않아서 '확인'이 출력 되지 않는다.
// 그러므로 함수는 가장 뒤에 호출 하는 것이 좋다

// &&(and) : 전부다 true여아 true

// !(not)

// 7. Equality
const stringOne = '1';
const numberOne = 1;

// loose equality (value)
console.log(stringOne == numberOne);
console.log(stringOne != numberOne);

// stric equality (value, type)
console.log(stringOne === numberOne);
console.log(stringOne !== numberOne);

// 8. if
const name = 'pionari';
if (name === 'pionari') {
  console.log('Welcome!');
} else if (name === 'others') {
  console.log('Hi');
} else {
  console.log('unknown');
}

// 9. 3항연산자
console.log(name === 'pionari' ? 'yes' : 'no');

// 10. switch
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('HI');
    break;
  case 'chrome':
  case 'Firefos':
    console.log('What!');
    break;
  default:
    console.log('Wow');
    break;
}

// 11. while
let i = 3;
while (i > 0) {
  console.log(i);
  i--;
}

// do while
do {
  console.log(i);
} while (i > 0);

// 12. for
for (let j = 3; j > 0; j--) {
  console.log(j);
}
