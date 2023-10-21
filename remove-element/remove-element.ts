import { idxPrinter } from "../helpers/arrays";

export const removeElement = (nums: number[], val: number) => {
  let k = 0;
  for (let i = 0, j = nums.length - 1; i < nums.length && i != j; ) {
    if (nums[i] === val) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j--;
    } else {
      i++;
      k++;
    }
  }
  return k + 1;
};
