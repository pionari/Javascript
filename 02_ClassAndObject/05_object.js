'user stric';

//object = { key : value };

//1. literals and properties
const obj = {}; //'object literal'
const obj2 = new Object(); //'object constructor'

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const yeri = { name: 'yeri', age: 20 }; // 클래스 없이 오브젝트 생성 가능
print(yeri);

yeri.hasJob = true; //property 추가
console.log(yeri.hasJob); //true

delete yeri.hasJob; // 삭제도 가능
console.log(yeri.hasJob); //undefiend

//2. Computed properties
console.log(yeri.name);
console.log(yeri['name']); // 이런 접근 방식도 있다

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(yeri, 'name');
printValue(yeri, 'age');

//3. property value shorthand
const person1 = { name: 'aaa', age: 2 };
const person2 = { name: 'bbb', age: 3 };
const person3 = { name: 'ccc', age: 4 };
const person4 = { name: 'ddd', age: 5 };

console.log(person4);
// 번거로운 방식

function makePerson(name, age) {
  return {
    name,
    age,
  };
}

console.log(makePerson('yeri', 20));

//4. constructor
const person5 = new Person('yeri', 20);
console.log(person5);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

//5. in operator
console.log('name' in yeri); // true
console.log('age' in yeri); // true
console.log('address' in yeri); //false
console.log(yeri.random); // undefined

//6. for..in vs for..of
//for (key in obj)

for (key in yeri) {
  console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (value of array) {
  console.log(value);
}

//7. cloning
const user = { name: 'yeri', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user); //coder로 이름이 변경됨

//old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

//another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
