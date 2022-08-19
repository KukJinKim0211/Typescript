// 런타임에는 타입 체크가 불가.

// 에러 발생 구문
interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;

/*
function calculateArea01(shape: Shape) {
  // instanceof의 체크는 런타임에서 발생.
  // Rectangle은 타입이기 때문에 런타임 시점에 역할 불가..
  if (shape instanceof Rectangle) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}
*/

// 해결방법 1. 런타임에 타입 정보를 유지
function calculateArea02(shape: Shape) {
  if ('height' in shape) {
    shape;    // 타입이 Rectangle
    return shape.width * shape.height;
  } else {
    shape;    // 타입이 Square
    return shape.width * shape.width;
  }
}