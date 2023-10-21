import { expect, test, describe } from "bun:test";
import { idxPrinter } from "./arrays";

// CASE 1:
describe("helpers", () => {
  describe("arrays", () => {
    test("first and last", () => {
      const array = [3, 2, 2, 3];
      const indices = [0, 3];

      const idxString = idxPrinter(array, indices);
      console.log(idxString);
      console.log(`  i        j\n[ 3, 2, 2, 3 ]`);
      expect(idxString).toEqual(`  i        j\n[ 3, 2, 2, 3 ]`);
    });
    test("first and last - reverse", () => {
      const array = [3, 2, 2, 3];
      const indices = [3, 0];

      const idxString = idxPrinter(array, indices);
      expect(idxString).toEqual(`  j        i\n[ 3, 2, 2, 3 ]`);
    });
    test("first and second to last - reverse", () => {
      const array = [3, 2, 2, 3];
      const indices = [2, 0];

      const idxString = idxPrinter(array, indices);
      console.log(idxString);
      console.log(`  i     j\n[ 3, 2, 2, 3 ]`);
      expect(idxString).toEqual(`  j     i\n[ 3, 2, 2, 3 ]`);
    });
    test("next", () => {
      const array = [3, 2, 2, 3];
      const indices = [1, 2];

      const idxString = idxPrinter(array, indices);
      console.log(idxString);
      console.log(`     i  j\n[ 3, 2, 2, 3 ]`);
      expect(idxString).toEqual(`    i   j\n[ 3, 2, 2, 3 ]`);
    });
  });
});
