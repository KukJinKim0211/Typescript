// 함수 구현 기법

// 매개변수 기본값 설정
type Man = { name: string; age: number };
const makeMan = (name: string, age: number): Man => {
  const man = { name: name, age: age };
  // 단축구문도 가능
  // const man = { name, age };
  return man;
};

// 객체를 반환하는 화살표 함수
const makeMan2 = (name: string, age: number): Man => ({
  name,
  age,
});

// 매개변수에 비구조화 할당문 사용
const printMan = ({ name, age }: Man): void =>
  console.log(`name:${name} age:${age}`);

// 색인 키와 값으로 객체 생성
// ex) const makeObject = (key, value) => ({[key]: value})
// {[key]: value} => 색인 기능 타입
type keyValueType = {
  [key: string]: string;
};
const makeObject = (key: string, value: string): keyValueType => ({
  [key]: value,
});
