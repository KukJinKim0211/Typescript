import { readFile } from "fs";

// 파일 읽기 비동기 처리 방법
readFile("./package.json", (err: Error, buffer: Buffer) => {
  if (err) throw err;
  else {
    const content: string = buffer.toString();
    console.log(content);
  }
});
