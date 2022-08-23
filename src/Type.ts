// 타입 주석
let n: number = 1;
let b: boolean = true;
let s: string = 'hello world!';
let o: object = {};

// any 타입은 값의 타입과 무관하게 어떤 종류의 값도 저장이 가능
let a: any = 0;
a = {};
a = false;
// undefined 타입
let u: undefined = undefined;


// 타입 추론 : 자바스크립트와의 호환성을 위해 타입 주석 부분을 생략 가능.
let num = 1;
let bool = true;

