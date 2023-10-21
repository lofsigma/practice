import { idxPrinter } from "../helpers/arrays";

export const removeElement = (nums: number[], val: number) => {
  let k = 0;
  for (let i = 0, j = nums.length - 1; i < nums.length; i++) {
    if (nums[i] === val) {
      let t = nums[i];
      nums[i] = nums[j];
      nums[j] = t;
      j--;
      k++;
    }
    console.log(idxPrinter(nums, [i, j]));
  }
  return k;
};
