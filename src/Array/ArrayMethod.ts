import { range } from "./Array";
// filter
// filter(callback: (value:T, index?: number): boolean): T[]
{
  const array: number[] = range(1, 10 + 1);
  let odds: number[] = array.filter((value) => value % 2 !== 0);
  let evens: number[] = array.filter((value) => value % 2 === 0);
}

// map => 입력 타입과 다른 타입의 배열을 생성 가능
// map(callback: (value: T, index?: number): Q): Q[]
{
  const array: number[] = range(1, 5 + 1).map((val: number) => val * val);
  console.log(array);
}

// reduce => 배열의 각 요소를 순회하며 callback함수의 실행값을 누적하여 하나의 값을 출력
// reduce(callback: (result: T, value: T), initialValue: T): T
{
  const sum: number = range(1, 100 + 1).reduce(
    (result: number, value: number) => result + value,
    0,
  );
  console.log(sum);
}
