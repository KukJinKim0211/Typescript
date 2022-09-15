// 반복기
/*
  1. next라는 이름의 메서드를 제공
  2. next 메서드는 value와 done이라는 두 개의 속성을 가진 객체를 반환
*/

{
  // 반복기 제공자 예제
  const createRangeIterable = (from: number, to: number) => {
    let currentValue = from;
    return {
      next() {
        const value = currentValue < to ? currentValue++ : undefined;
        const done = value === undefined;
        return { value, done };
      },
    };
  };

  // 반복기 사용 예제
  const iterator = createRangeIterable(1, 3 + 1); // 현재 동작하지 않는 반복기
  while (true) {
    const { value, done } = iterator.next(); // 반복기를 동작시킴
    if (done) break;
  }
}

// 반복기는 값이 필요한 시점에 생성하기 때문에 시스템 메모리의 효율성이 높다. 메모리를 적게 소모한다.

// for...of 구문에서의 반복기
/*
  // 에러 발생!! 클래스로 구현해야 함.
  const iterable = createRangeIterable(1, 3 + 1);
  for (let value of iterable)
    console.log(value)
*/
{
  class RangeIterable {
    constructor(public from: number, public to: number) {}
    [Symbol.iterator]() {
      const that = this;
      let currentValue = that.from;
      return {
        next() {
          const value = currentValue < that.to ? currentValue++ : undefined;
          const done = value === undefined;
          return { value, done };
        },
      };
    }
  }

  const iterator = new RangeIterable(1, 3 + 1);
  for (let value of iterator) console.log(value);
}

// 반복기 제공자에 Iterable<T>, Iterator<T> 제네릭 인터페이스 사용 가능
// class 구현클래스 implements Iterable<생성할 값 타입> {}
// [Symbol.iterator](): Iterator<생성할 값 타입> {}
{
  class StringIterable implements Iterable<string> {
    constructor(
      private strings: string[] = [],
      private currentIndex: number = 0,
    ) {}
    [Symbol.iterator](): Iterator<string> {
      const that = this;
      let currentIndex = that.currentIndex;
      let length = that.strings.length;

      const iterator: Iterator<string> = {
        next(): { value: string; done: boolean } {
          const value =
            currentIndex < length ? that.strings[currentIndex++] : undefined;
          const done = value === undefined;
          return { value, done };
        },
      };

      return iterator;
    }
  }

  for (let value of new StringIterable(["hello", "world", "!"]))
    console.log(value);
}
