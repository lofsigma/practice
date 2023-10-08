// export const merge = (
// nums1: number[],
// m: number,
// nums2: number[],
// n: number
// ) => {
//   let t = [...nums1];
//   for (let i = 0, j = 0, k = 0; i < m + n; i++) {
//     if ((k < m && t[k] > nums2[j]) || k >= m) {
//       nums1[i] = nums2[j];
//       j++;
//       if (k >= m) {
//         k++;
//       }
//     } else {
//       nums1[i] = t[k];
//       k++;
//     }
//   }
// };

export const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) => {
  for (let i = m - 1, j = n - 1, k = m + n - 1; j >= 0; ) {
    if (i < 0 || nums1[i] < nums2[j]) {
      nums1[k] = nums2[j];
      j--;
    } else {
      nums1[k] = nums1[i];
      i--;
    }
    k--;
  }
};
