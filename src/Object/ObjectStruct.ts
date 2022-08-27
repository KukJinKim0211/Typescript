// 객체의 비구조화 할당문, 잔여 연산자, 전개 연산자
import { IPerson } from "./ObjectInterface";

/////////// 객체의 비구조화 할당
let jack: IPerson = { name: "Jack", age: 32 };
let jane: IPerson = { name: "Jane", age: 39 };

let { name, age } = jack;

///////////// 잔여 연산자
let address: any = {
  country: "Korea",
  city: "Seoul",
  address1: "Gangnam-gu",
  address2: "Sinsa-dong 123-456",
  address3: "789 street, 2 Floor ABC building",
};
// 앞의 주소 2개를 뺀 세부 주소만 얻기
const { country, city, ...detail } = address;

////////////// 전개 연산자
let myName = { name: "kim" };
let myAge = { age: 29 };
let myPhone = { phone: "010-4853-5704" };
let merged = { ...myName, ...myAge, ...myPhone };
