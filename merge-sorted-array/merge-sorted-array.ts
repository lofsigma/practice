export const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) => {
  let j = 0;
  if (j >= n) return;
  for (let i = 0; i < nums1.length; i++) {
    if (i >= m) {
      nums1.splice(i, nums2.slice(j).length, ...nums2.slice(j));
      break;
    }
    if (nums1[i] > nums2[j]) {
      nums1[i + 1] = nums1[i];
      nums1[i] = nums2[j];
      i++;
      j++;
    }
  }
};
