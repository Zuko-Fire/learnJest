
import checkFile from "./checkFile";
import path from "path";

const filePath = path.join(__dirname, "testingFile.txt");
describe("testFile", () => {
  test("testFile", () => {
    expect(checkFile(filePath, 'hello')).toBe('содержит');
    expect (checkFile(filePath, 'World')).not.toBe('содержит');
    expect (checkFile('fdssd', 'error')).toBe('ошибка');
  });
});