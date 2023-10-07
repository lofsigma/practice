import { expect, test } from "bun:test";

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let h = 0;

  let nums2idx = 0;
  nums1.forEach((x, i) => {
    nums2[nums2idx] < x;
    nums1[i] = nums2[nums2idx];
    nums1;
  });
}

function moveOneOver(array: number[], size: number) {
  array.reverse().forEach((x, i) => {
    if (i < size) {
      array[i] = array[i - 1];
    }
  });
  return array.reverse();
}

//merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// console.log(moveOneOver([1, 2, 3, 0, 0, 0], 3));

// ok need day, lets get after it!

[1, 2, 3, 0, 0, 0];

// array under construction strat:

// new array of length m+n

// I want to take advantage of the fact that they are themselves already sorted

// I could always throw them together and sort them, but not in O(m+n) time.

// [1,2,3] -- [2,5,6]

// q: am I to the left or to the right of one?
// a: to the right

// [1] [2,5,6] [2,3]

// q: am I to the left or to the right of 2?

// a: right by convetion.

// [1,2] [2,5,6] [3]

// q: am I to the left or to the right of 3?
// a: to the left.

// plop me there

// [1,2,2] [5,6] [3]

// q: am I to the left or to the right of 3?
// a: right

// [1,2,2,3] [5,6]

// q: nums1 is empty so plop remaining there

const merge2 = (nums1: number[], m: number, nums2: number[], n: number) => {
  let nums2idx = 0;
  let temp: number[] = [];
  let j = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] == 0) {
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
  nums1 = temp;
};
console.log(merge2(n));

// [[1],2,3]

// [1]

// [1,[2], 3]

// [1,2]

// [1,2,[3]]
// [1,2,2,3]

// [1,2,3,[0],0,0]
// [ 1, 2, 2, 3]

// TESTS

// CASE 1:
var nums1 = [1, 2, 3, 0, 0, 0];
var nums2 = [2, 5, 6];
var m = 3;
var n = 3;
test();
