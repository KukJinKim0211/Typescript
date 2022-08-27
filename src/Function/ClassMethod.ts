// 클래스 메서드
// 타입스크립트는 function 키워드로 만든 함수에 this 키워드를 사용 가능.
// 화살표 함수에는 this를 사용 불가

// 타입스크립트로 구현한 클래스
class TypeScriptClass {
  constructor(public value: number = 1) {}
  method(): void {
    console.log(this.value);
  }

  // 정적 메서드
  static helloWorld(language: string = "typescript"): void {
    console.log(`Hello ${language} World`);
  }

  // 메서드 체인
  // 메서드체인을 구현하려면 항상 메서드가 this를 반환하도록 해야 한다.
  add(value: number) {
    this.value += value;
    return this;
  }
  multiply(value: number) {
    this.value *= value;
    return this;
  }
}

let tsClass: TypeScriptClass = new TypeScriptClass(10);
tsClass.method();
// 정적 메서드 호출
TypeScriptClass.helloWorld();
TypeScriptClass.helloWorld("javascript");
// 메서드 체인 사용
console.log(tsClass.add(1).add(2).add(3).multiply(2).multiply(2).value);
