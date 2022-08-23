# Typescript

타입스크립트 개요
TypeScript-------------------------------
| |
| ESNext------------------------- |
| | | |
| | ES5-------------------- | |
| | | | | |
| | |****\*\*****\_\_****\*\*****| | |
| |******\*\*******\_\_******\*\*******| |
|********\*\*********\_\_\_********\*\*********|

ES5: 웹 브라우저에서 동작하는 표준 자바스크립트
ESNext: ES6 이후 버전
TypeScript: ESNext에 타입 기능을 추가

타입 스크립트 설치
sudo npm install -g typescript

타입 스크립트 설정파일 생성
tsc --init

config 설정
noImplicitAny => 변수들이 미리 정의된 타입을 가져야 하는지 여부를 제어

- 되도록 설정해야
- 문제 발견 수월, 코드의 가독성 향상, 개발자의 생산성 향상

strictNullChecks => null과 undefined가 모든 타입에서 허용되는지 확인

noEmitOnError => 오류가 있을 때 컴파일하지 않음
