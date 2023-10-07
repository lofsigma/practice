export const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) => {
  let nums2idx = 0;
  let temp: number[] = [];
  let j = 0;
  if (nums2idx >= n) return;
  for (let i = 0; i < nums1.length; i++) {
    if (i >= m) {
      temp = temp.concat(nums2.slice(nums2idx));
      break;
    }
    if (nums1[i] <= nums2[nums2idx]) {
      temp[i] = nums1[i];
      j++;
    } else {
      temp[j] = nums2[nums2idx];
      temp[j + 1] = nums1[i];
      j += 2;
      nums2idx++;
    }
    console.log("temp: ", temp);
  }
  nums1.splice(0, nums1.length, ...temp);
};
