import { readFileSync } from "fs";

// 파일 읽기 메서드. 동기식으로 작동
const buffer: Buffer = readFileSync("./package.json");
const content: string = buffer.toString();
console.log(content);
