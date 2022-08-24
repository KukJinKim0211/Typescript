// 함수 선언문 예제
/*
  function 함수명(매개변수1: 타입1, 매개변수2: 타입2,...): 반환값 타입 {
  
  }
*/
function add(a: number, b: number): number {
  return a + b;
}

/////// 함수 시그니처
// 함수의 타입을 의미함
let add1: (param1: number, param2: number) => number = function (
  num1: number,
  num2: number,
): number {
  return num1 + num2;
};

/////// 타입 별칭
// type 키워드로 기존의 타입에 이름을 붙여서 이용
// 함수 시그니처를 더 간결하게 이용
type numberDoubleFunc = (param1: number, param2: number) => void;
let addFunc: numberDoubleFunc = function (num1: number, num2: number): number {
  return num1 + num2;
};
let subFunc: numberDoubleFunc = function (num1: number, num2: number): number {
  return num1 - num2;
};

//////// undefined
// undefined 관련 오류를 방지하려면 매개변수값이 undefined인지를 판별하는 코드를 작성해야 한다.
interface IAgeable {
  age?: number;
}
function getAge(o: IAgeable) {
  return o != undefined && o.age ? o.age : 0;
}
console.log(getAge({ age: 32 }));
