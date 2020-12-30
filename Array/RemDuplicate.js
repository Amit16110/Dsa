const removeDuplicate = (arr, n) => {
  if (n === 0 || n === 1) {
    return n;
  }

  let j = 0;

  for (i = 0; i < n - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[j] = arr[i];
      j += 1;
    }
    arr[j] = arr[n - 1];
    j += 1;
    return j;
  }
};

// const removeDuplicate = function (arr) {
//   if (arr.length < 1) {
//     return 0;
//   }
//   let temp = new Array();

//   let j;

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       temp[j++] == arr[i];
//     }

//     temp[j++] = arr[arr.length];

//     for (i = 0; i < j; i++) {
//       arr[i] = temp[i];
//     }

//     return j;
//   }

// if (arr.length === 0) {
//   return 0;
// }

// let j = 0;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[j] !== arr[i]) {
//     j++;
//     arr[j] = arr[i];
//   }
// }

//   // return j + 1;
// };

arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];

n = arr.length;

let ary = removeDuplicate(arr, n);

for (i = 0; i < n; i++) {
  console.log(arr[i] + " ");
}

console.log(arr);
