// Method 2 efficient take less space but not so efficient.

const leftRotate = (arr, n, d) => {
  for (let i = 0; i < d; i++) {
    leftRotateByOne(arr, n);
  }
  return arr;
};

const leftRotateByOne = (arr, n) => {
  let temp;

  temp = arr[0];
  for (let i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = temp;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = arr.length;
let d = 3;

let asdfhs = leftRotate(arr, n, d);

console.log(asdfhs);
