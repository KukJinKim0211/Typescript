// 생성기
/*
  - yeild라는 키워드로 사용
  - yeild는 return 키워드처럼 값을 반환
  - 반드시 function* 키워드를 사용한 함수에서만 호출 가능
*/

import { min } from "ramda";

// yeild 키워드를 사용한 생성기 함수
{
  function* rangeGenerator(from: number, to: number) {
    let value = from;
    while (value < to) {
      yield value++;
    }
  }

  for (let value of rangeGenerator(4, 6 + 1)) console.log(value);
}

// 반복기 제공자의 메서드로 동작하는 생성기
{
  class IterableUsingGenerator<T> implements Iterable<T> {
    constructor(private values: T[] = [], private currentIndex: number = 0) {}
    [Symbol.iterator] = function* () {
      while (this.currentIndex < this.values.length)
        yield this.values[this.currentIndex++];
    };
  }
}

// yeild* 키워드 사용 예제
// yeild는 값을 대상으로, yeild*는 다른 생성기나 배열을 대상으로도 동작 가능
{
  function* gen12() {
    yield 1;
    yield 2;
  }

  function* gen12345() {
    yield* gen12();
    yield* [3, 4];
    yield 5;
  }

  for (let value of gen12345()) console.log(value);
}

// yeild 반환값
// yeild 연산자는 값을 반환
{
  function* gen() {
    let count = 5;
    let select = 0;
    while (count--) {
      select = yield `you select ${select}`;
    }
  }
  const random = (max, min = 0) =>
    Math.round(Math.random() * (max - min)) + min;

  const iter = gen();
  while (true) {
    const { value, done } = iter.next(random(10, 1));
    if (done) break;
    console.log(value);
  }
}
