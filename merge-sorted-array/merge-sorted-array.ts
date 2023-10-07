export const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) => {
  let i = 0;
  let j = 0;
  let k = 0;
  let t = [...nums1];
  for (; k < m + n; ) {
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
    i++;
  }
};

// now how do I do this without a temporary array?
