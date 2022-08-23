# Typescript

타입스크립트 개요
TypeScript
ESNext
ES5

ES5: 웹 브라우저에서 동작하는 표준 자바스크립트
ESNext: ES6 이후 버전. 트랜스파일러 바벨을 거치면 ES5 JS 코드로 변환
TypeScript: ESNext에 타입 기능을 추가

타입 스크립트 설치
sudo npm install -g typescript

타입 스크립트 설정파일 생성
tsc --init

npm i ts-node => ts 코드를 ES5로 변환하고 실행 가능하게 하는 프로그램
npm i @types/node => Promise 같은 여러 타입을 사용하기 위해 설치
npm i chance => 가짜 데이터 생성
npm i ramda => 함수형 유틸리티 패키지

tsconfig 설정
noImplicitAny => 변수들이 미리 정의된 타입을 가져야 하는지 여부를 제어
module => amd:웹 브라우저 동작 commonjs:노드js에서 동작
moduleResolution => node:nodejs classic:amd
target => 트랜스파일할 대상 js 버전 설정
baseUrl => 트랜스파일된 js 파일을 저장하는 디렉터리 설정 . => 현재 디렉터리로 설정
outDir => 트랜스파일된 js 파일을 저장하는 디렉터리 설정. 하위 디렉토리 명
paths => 소스파일의 import문에서 from부분을 해석할 때 찾아야 하는 디렉터리 설정
esModuleInterop => 오픈 소스 라이브러리 중에서는 웹 브라우저에서 동작한다는 가정으로 만들어진 것들이 존재. true로 설정하면 노드 환경에서 실행해도 오류가 발생하지 않음
sourceMap => true일 시, 트랜스파일 디렉터리에 .js.map 파일이 만들어짐. 이 파일은 js코드가 ts코드의 어디에 해당하는지 알려줌. 디버깅할때 주로 사용
downlevelIteration => 생성기 구문이 정상적으로 동작하려면 true로 설정
strictNullChecks => null과 undefined가 모든 타입에서 허용되는지 확인
noEmitOnError => 오류가 있을 때 컴파일하지 않음
