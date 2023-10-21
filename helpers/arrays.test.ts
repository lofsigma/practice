import { expect, test, describe } from "bun:test";
import { idxPrinter } from "./arrays";
import { expectationPrint } from "./debug";

describe("helpers", () => {
  describe("arrays", () => {
    test("first and last", () => {
      const array = [3, 2, 2, 3];
      const indices = [0, 3];

      const result = idxPrinter(array, indices);
      const expectation = `  i        j  \n[ 3, 2, 2, 3 ]`;

      expect(result).toEqual(expectation);
      expectationPrint(result, expectation);
    });
    test("first and last - reverse", () => {
      const array = [3, 2, 2, 3];
      const indices = [3, 0];

      const result = idxPrinter(array, indices);
      const expectation = `  j        i  \n[ 3, 2, 2, 3 ]`;

      expect(result).toEqual(expectation);
      expectationPrint(result, expectation);
    });
    test("first and second to last - reverse", () => {
      const array = [3, 2, 2, 3];
      const indices = [2, 0];

      const result = idxPrinter(array, indices);

      const expectation = `  j     i     \n[ 3, 2, 2, 3 ]`;

      expect(result).toEqual(expectation);
      expectationPrint(result, expectation);
    });
    test("next", () => {
      const array = [3, 2, 2, 3];
      const indices = [1, 2];

      const result = idxPrinter(array, indices);
      const expectation = `     i  j     \n[ 3, 2, 2, 3 ]`;

      expect(result).toEqual(expectation);
      expectationPrint(result, expectation);
    });
    test("long", () => {
      const array = [0, 1, 2, 2, 3, 0, 4, 2];
      const indices = [0, 7];

      const result = idxPrinter(array, indices);
      const expectation = `  i                    j  \n[ 0, 1, 2, 2, 3, 0, 4, 2 ]`;

      expect(result).toEqual(expectation);
      expectationPrint(result, expectation);
    });
    test.todo("overlapping", () => {
      // ARGHHHHH
    });
  });
});
