// added ECMAScript 5
'use strict';

// 1. let (added in ES6)
/* 
        전역 변수 -> 블록 내외부에서 출력 가능
        어플리케이션이 실행되는 순간부터 끝나는 순간까지 메모리에 탑재되므로
        최소한으로 사용 하는 것이 좋다
    */
let myName = 'pionari';
console.log(myName);
myName = 'yoon';
console.log(myName);

{
  let name = 'pionari';
}

console.log(name); // 블록 안에 존재하는 변수는 블록 내에서만 호출 가능하므로 출력되지 않는다

// 2. var (과거에 자주 사용하던 변수)
/*
        var hoisting : var 변수를 어디에 선언했는지에 상관없이 선언을 항상 제일 위로 끌어 올려 주는 것
        var는 block scope가 없으므로 어디에서나 사용가능 하다
        -> 유연성은 있지만 선언하지 않은 값들이 할당되는 경우가 발생하므로 사용하지 않는 것이 좋다
    */

console.log(age);
var age = 10;

// 3. Constant (상수) 읽기만 가능하다
// 값 변경이 불가능한(immutable) 타입의 데이터 타입
const daysInWeek = 7;
console.log(daysInWeek);

/*
    기초 지식) Variable types (데이터 타입)
    primitive (더이상 나눠질 수 없는 한가지의 아이템): String, Number, boolean, null, undefiend, symbol
    object : single item들을 한 단위로 묶은 것
    function : 자바스크립트에서는 function도 변수에 할당 가능하다 
*/

// Number
const count = 17; // Integer (정수형)
const size = 17.1; // float (실수형)
console.log(`value: ${count}, type:${typeof count}`); // number type
console.log(`value: ${size}, type:${typeof size}`); // number type

const infinity = 1 / 0;
console.log(infinity); // infinity

const negativeInfinity = -1 / 0;
console.log(negativeInfinity); //-infinity

const nAn = 'not a number' / 2;
console.log(nAn); //NaN : not a number

// String
const char = 'c';
const visitor = 'pionari';
const greeting = 'hello! ' + visitor;
console.log(`value : ${greeting}, type: ${typeof greeting}`);

// boolean (참, 거짓)
/*
        false : 0, null, undefined, NaN, ''
        true : any other value
    */

const canRead = true;
console.log(canRead);

const test = 3 < 1;
console.log(test); // false

// null
let nothing = null;

// undefined
let x;
console.log(x);

// symbol : 객체의 고유한 식별자
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2); // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2); // true

// object
const pionari = { name: 'pionari', age: 20 };
console.log(pionari);
pionari.age = 30;
console.log(pionari);

// 5. Dynamic typing
// 선언할 때 어떤 타입인지 선언하지 않고 프로그램이 실행될 때 할당된 값에 따라
// 타입이 변경 된다
let text = 'hello';
console.log(`${typeof text}`); //string
text = 1;
console.log(`${typeof text}`); //number
text = 'hello' + 1;
console.log(`${typeof text}`); //string
text = '8' / '2';
console.log(`${typeof text}`); //number
