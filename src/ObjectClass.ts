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

////////// 생성자
// 생성자의 매개변수에 접근 제한자를 붙이면 해당 매개변수의 이름을 가진 속성이 클래스에 선언된 것 처럼 동작
// Person class를 함축해서 구현
class Person2 {
  constructor(public name: string, public age: number) { }
}

let jack: Person = new Person('Jack', 32);
console.log(jack);

/////////// 인터페이스
// 클래스는 인터페이스를 구현 할 수 있다
/*
  class 클래스명 implements 인터페이스명 {
  
  }
*/
// 클래스 인터페이스 구현 예제
interface IPerson2 {
  name: string
  age?: number
}
// 클래스 몸통에도 인터페이스가 정의하고 있는 속성을 멤버 속성으로 포함해야 한다.
class Person3 implements IPerson2 {
  constructor(public name: string, public age: number) { }
}

//////////// 추상 클래스
// 추상클래스를 구현해 이 클래스를 상속하는 다른 클래스에서 이 속성이나 메서드를 구현하게 한다.
/*
  abstract class 클래스명 {
    abstract 속성이름: 속성타입
    abstract 메서드이름() {}
  }
*/

/////////// 클래스 상속
/*
  class 상속클래스 extends 부모클래스 {
  
  }
*/
abstract class AbstractPerson {
  abstract name: string
  constructor(public age?: number) { }
}
class Person4 extends AbstractPerson {
  constructor(public name: string, public age?: number) {
    super(age);
  }
}
let jack2: Person4 = new Person4('Jack', 32);

///////////// static 속성을 가진다
class A {
  static age: number = 29;
}
// 점 표기법을 사용해 값을 얻거나 설정 가능
let myAge = A.age;