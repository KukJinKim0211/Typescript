// 런타임에는 타입 체크가 불가.

// 에러 발생 구문
/*
interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  // instanceof의 체크는 런타임에서 발생.
  // Rectangle은 타입이기 때문에 런타임 시점에 역할 불가..
  if (shape instanceof Rectangle) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}
*/

// 타입 정보를 유지하는 방법
// 해결방법 1. 런타임에 타입 정보를 유지
/*
interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if ('height' in shape) {
    shape;    // 타입이 Rectangle
    return shape.width * shape.height;
  } else {
    shape;    // 타입이 Square
    return shape.width * shape.width;
  }
}
*/

// 해결방법 2. 타입 정보를 명시적으로 저장하는 태그 기법
/*
interface Square {
  kind: 'square';
  width: number;
}
interface Rectangle {
  kind: 'rectangle';
  height: number;
  width: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape.kind === 'rectangle') {
    shape;    // 타입이 Rectangle
    return shape.width * shape.height;
  } else {
    shape;    // 타입이 Square
    return shape.width * shape.width;
  }
}
*/

// 해결방법 3. 타입과 값을 둘 다 사옹하기 위해 타입을 클래스로 생성
class Square {
  constructor(public width: number) { }
}
class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  }
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    shape;    // 타입이 Rectangle
    return shape.width * shape.height;
  } else {
    shape;    // 타입이 Square
    return shape.width * shape.width;
  }
}
