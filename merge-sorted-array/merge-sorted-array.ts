export const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) => {
  let j = 0;
  let k = 0;
  let t = [...nums1];
  for (let i = 0; i < m + n; i++) {
    if ((k < m && t[k] > nums2[j]) || k >= m) {
      nums1[i] = nums2[j];
      j++;
      if (k >= m) {
        k++;
      }
    } else {
      nums1[i] = t[k];
      k++;
    }
  }
};
