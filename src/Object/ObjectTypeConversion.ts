// 객체의 타입 변환(타입 단언)
import { IPerson } from './ObjectInterface';

let person: object = { name: 'Jack', age: 32 };
/*
  오류가 발생하는 이유 : object 타입은 name 속성을 가지지 않기 때문.
  console.log(person.name);
*/

// 타입 변환을 이용해 오류를 해결
console.log((<{ name: string }>person).name);

// 타입 단언 형태
/*
  (<타입>객체)
  (객체 as 타입)
*/

let obj: object = { name: 'Jack', age: 32 };

let name1 = (<IPerson>obj).name;
let name2 = (obj as IPerson).name;
let age1 = (<IPerson>obj).age;
let age2 = (obj as IPerson).age;
console.log(name1, name2, age1, age2);