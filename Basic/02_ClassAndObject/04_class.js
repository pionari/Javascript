'use strict';

//class: kind of template, declare once, no data in (붕어빵 틀)
//object : instance of a class, created many time, data in (팥붕어빵, 크림붕어빵, 피자붕어빵 ...)

// 1. class declarations
class Person {
  // constructor 속성
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //methods 행동
  speak() {
    console.log(`${this.name} : hello!`);
  }
}

const yeri = new Person('yeri', 20);
console.log(yeri.name);
console.log(yeri.age);
yeri.speak();

// 2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; // 게터, 세터가 정의된 경우 호출
  }
  // 게터 : 값 리턴
  get age() {
    return this._age;
  }

  // 세터 : 값 설정
  set age(value) {
    this._age = value < 0 ? 'wrong value' : value;
  }
}
const user1 = new User('yoon', 'Park', -1);
console.log(user1.age);

//3. fields (public, private)
//최근에 추가되어서 잘 쓰이지는 않는다

class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static
//최근에 추가되어서 잘 쓰이지는 않는다
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. 상속
// 재사용이 쉽고 유지보수에 용이

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

class Triangle extends Shape {
  draw() {
    super.draw(); // 부모의 메소드
    console.log('red triangle');
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}
const triangle = new Triangle(10, 10, 'red');
triangle.draw();
console.log(triangle.getArea());

//6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true -> object는 최상위 클래스
