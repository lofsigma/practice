import { expect, test, describe } from "bun:test";
import { removeElement } from "./remove-element";

// CASE 1:
describe("remove-element", () => {
  test("case 1", () => {
    let nums = [3, 2, 2, 3];
    let val = 3;

    const k = removeElement(nums, val);

    expect(k).toEqual(2);

    expect(nums.slice(0, k + 1).sort()).toEqual([2, 2].sort());
  });
  test("case 2", () => {
    let nums = [0, 1, 2, 2, 3, 0, 4, 2];
    let val = 2;
    const k = removeElement(nums, val);
    expect(k).toEqual(5);
    expect(nums.slice(0, k + 1).sort()).toEqual([0, 1, 3, 0, 4].sort());
  });
});
