// 순수 함수 => 부수효과가 없는 함수
/*
  - 함수 몸통에 입출력 관련 코드가 없어야 한다.
  - 함수 몸통에서 매개변숫값을 변경시키지 않는다.
  - 함수는 몸통에서 만들어진 결과를 즉시 반환
  - 함수 내부에 전역 변수나 정적 변수를 사용하지 않는다
  - 함수가 예외를 발생시키지 않는다
  - 함수가 콜백 함수로 구현되었거나 함수 몸통에 콜백 함수를 사용하는 코드가 없다
  - 함수 몸통에 Promise 같은 비동기 방식으로 동작하는 코드가 없다
*/

// 타입 수정자 readonly
{
  // readonly 타입으로 선언된 매개변수는 변경하려는 시도가 있으면 문제가 있는 코드라고 표시
  /*
  function func(array: readonly number[]) {
    array.push(1);
  }
  */
}

// 깊은 복사
{
  const array = [1, 2, 3, 4];
  const array2 = [...array];
}

// filter 메서드로의 순수한 삭제
{
  const pureDelete = <T>(
    array: readonly T[],
    cb: (val: T, index?: number) => boolean,
  ): T[] => array.filter((val, index) => cb(val, index) === false);

  const mixedArray: object[] = [
    [],
    { name: "Kim" },
    { name: "Gang", age: 32 },
    ["hi"],
  ];

  const objectsOnly: object[] = pureDelete(mixedArray, (val) =>
    Array.isArray(val),
  );
  console.log(objectsOnly);
}

// 배열의 데이터 합치기
{
  const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
    let result: T[] = [];
    for (let i = 0; i < arrays.length; i++) {
      const array: T[] = arrays[i];

      result = [...result, ...array];
    }

    return result;
  };

  const array: string[] = mergeArray(["hello"], ["typescript", "world"]);
  console.log(array);
}
