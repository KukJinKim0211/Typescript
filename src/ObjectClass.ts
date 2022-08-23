// class, private, public, protected, implelements, extend 같은 키워드를 제공
/*
  class 클래스명 {
    [private | protected | public] 속성이름[?]: 속성타입[...]
  }
*/
class Person {
  name: string
  age?: number
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}
let jack: Person = new Person('Jack', 32);
console.log(jack);