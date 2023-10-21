import { expect, test, describe } from "bun:test";
import { merge } from "./merge-sorted-array";

// CASE 1:
describe("merge-sorted-array", () => {
  test("case 1", () => {
    let nums1 = [1, 2, 3, 0, 0, 0];
    let m = 3;
    let nums2 = [2, 5, 6];
    let n = 3;
    merge(nums1, m, nums2, n);
    expect(nums1).toStrictEqual([1, 2, 2, 3, 5, 6]);
  });
  test("case 2", () => {
    let nums1 = [1];
    let m = 1;
    let nums2: number[] = [];
    let n = 0;
    merge(nums1, m, nums2, n);
    expect(nums1).toStrictEqual([1]);
  });
  test("case 3", () => {
    let nums1 = [0];
    let m = 0;
    let nums2 = [1];
    let n = 1;
    merge(nums1, m, nums2, n);
    expect(nums1).toStrictEqual([1]);
  });
  test("case 4", () => {
    let nums1 = [4, 5, 6, 0, 0, 0];
    let m = 3;
    let nums2 = [1, 2, 3];
    let n = 3;
    merge(nums1, m, nums2, n);
    expect(nums1).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
