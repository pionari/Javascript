'user strict';
//Array

//1.Declaratiom
const arr1 = new Array();
const arr2 = [1, 2];

//2.Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

//3. looping over an Array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit));

console.clear();
//4. add, delete, copy
// push : 뒤에 add
fruits.push('pineapple', 'watermelon');
console.log(fruits);
// pop : 뒤에 있는걸 pop
fruits.pop('pineapple');
console.log(fruits);

//unshift : 앞에서부터  add
fruits.unshift('lemon');
console.log(fruits);

//shift : 앞에 있는걸 pop
fruits.shift('apple');
console.log(fruits);

//shift 와 unshift는 느리다

fruits.push('blueberry', 'melon');
console.log(fruits);
fruits.splice(0, 1);
console.log(fruits);

//Searching (indexOf, includes, lastIndexOf)
console.log(fruits);
console.log(fruits.indexOf('banana'));
console.log(fruits.includes('apple'));

console.clear();
fruits.push('banana');
console.log(fruits);
console.log(fruits.lastIndexOf('banana'));
