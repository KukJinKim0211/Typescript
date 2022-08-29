// 배열
// js에서의 배열은 객체이다.
{
  let array = [1, 2, 3];
  let object = { name: "kim", age: 29 };
  // 타입이 객체로 출력
  console.log(typeof array, typeof object);
  // isArray 메서드로 배열을 체크
  console.log(Array.isArray(array), Array.isArray(object));
}

// 배열의 타입 주석
{
  let numArray: number[] = [1, 2, 3];
  let stringArray: string[] = ["A", "B", "C"];
  type Person = { name: string; age?: number };
  let personArray: Person[] = [{ name: "kim" }, { name: "hwang", age: 20 }];
}

// for...in
{
  // 배열의 인덱스값을 순회
  let names = ["kim", "kang", "song"];
  for (let index in names) {
    const name = names[index];
    console.log(`[${index}]: ${name}`);
  }

  // 객체의 속성을 대상으로 순회
  let kim = { name: "kim", age: 29, country: "korea" };
  for (let property in kim) {
    console.log(`${property}: ${kim[property]}`);
  }
}

// for...of
{
  // 배열의 아이템값을 대상으로 순회
  for (let name of ["kim", "kang", "song"]) console.log(name);
}

// 제네릭 타입
// 배열을 다루는 함수를 작성 할 때는 T[] 형태로 배열의 아이템 타입을 한꺼번에 표현하는 것이 편리
{
  // ex
  const arrayLength = <T>(array: T[]): number => array.length;
  const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0;
}

// 제네릭 함수의 타입 추론
// 함수명<타입변수>(매개변수) 같은 형태로 명시해야 한다.
// 하지만 변수 부분을 생략할 수 있고, 타입스크립트가 타입 추론을 토 ㅇ해 생략된 타입을 찾아 낸다.
{
  const identity = <T>(n: T): T => n;
  console.log(identity<boolean>(true), identity(true));
}

// range 함수 구현
export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];
