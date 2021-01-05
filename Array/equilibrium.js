function effiEquili(arr, n) {
  let sum = 0;
  let leftSum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  for (let i = 0; i < n; i++) {
    sum -= arr[i];

    if (leftSum == sum) {
      return i;
    }

    leftSum += arr[i];
  }
  return -1;
}

// This is another way of doing this problem but it's inefficient. The time complexity: O(n^2)
// function equilibrium(arr, n) {
//   for (let i = 0; i < n; i++) {
//     let leftSum = 0;
//     let rightSum = 0;

//     for (let j = 0; j < i; j++) {
//       console.log("j series", j);
//       leftSum += arr[j];
//     }

//     for (let j = i + 1; j < n; j++) {
//       console.log("second j series", j);  // Loop knowledge making here try and understand here this loop
//       rightSum += arr[j];
//     }

//     if (leftSum == rightSum) {
//       return i;
//     }
//   }
//   return -1;
// }

let arr = [-7, 1, 5, 2, -4, 3, 0];
let n = arr.length;

console.log(effiEquili(arr, n));
