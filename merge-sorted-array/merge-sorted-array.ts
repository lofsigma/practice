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
    if (k < m) {
      if (t[k] > nums2[j]) {
        nums1[i] = nums2[j];
        j++;
      } else {
        nums1[i] = t[k];
        k++;
      }
    } else {
      nums1[i] = nums2[j];
      k++;
      j++;
    }
  }
};
