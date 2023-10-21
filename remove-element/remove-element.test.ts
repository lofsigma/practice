import { expect, test, describe } from "bun:test";
import { removeElement } from "./remove-element";
import { expectationPrint } from "../helpers/debug";

// CASE 1:
describe("remove-element", () => {
  test("case 1", () => {
    let nums = [3, 2, 2, 3];
    let val = 3;

    const k = removeElement(nums, val);

    expect(k).toEqual(2);

    const result = nums.slice(0, k).sort();
    const expectation = [2, 2].sort();
    expectationPrint(result.join(", "), expectation.join(", "));
    expect(result).toEqual(expectation);
  });
  test("case 2", () => {
    let nums = [0, 1, 2, 2, 3, 0, 4, 2];
    let val = 2;

    const k = removeElement(nums, val);

    expect(k).toEqual(5);

    const result = nums.slice(0, k).sort();
    const expectation = [0, 1, 3, 0, 4].sort();

    expectationPrint(
      `[ ${result.join(", ")} ]`,
      `[ ${expectation.join(", ")} ]`
    );

    expect(result).toEqual(expectation);
  });
});
