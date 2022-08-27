// object 타입은 인터페이스와 클래스의 상위 타입
// object 타입으로 선언된 변수는 number, boolean, string 타입의 값을 가질 수 없다
let obj: object = { name: "jack", age: 32 };
obj = { first: 1, second: 2 };

// 인터페이스
// 타입스크립트에서는 객체의 타입을 정의할 수 있게 하는 interface라는 키워드를 제공
// 객체의 타입을 정의하는것이 목적
export interface IPerson {
  name: string; // 필수 속성
  age: number; // 필수 속성
  etc?: boolean; // 선택 속성
}
let person1: IPerson = { name: "Jack", age: 32 };
let person2: IPerson = { name: "Kim", age: 29, etc: false };

// 익명 인터페이스
// interface 키워드, 인터페이스 이름을 사용하지 않고 인터페이스를 만들 수 있다.
// 주로 함수를 구현할 때 사용
let ai: {
  name: string;
  age: number;
  etc?: boolean;
} = { name: "Jack", age: 32, etc: true };

function printMe(me: { name: string; age: number; etc?: boolean }) {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`,
  );
}
printMe(ai);
