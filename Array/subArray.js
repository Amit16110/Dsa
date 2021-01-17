const subArraySum = (arr, n, sum) => {
  let curr_sum = arr[0];
  let start = 0;
  for (let i = 1; i < n; i++) {
    while (curr_sum > sum && start < i - 1) {
      console.log("curr_sum=>", curr_sum);
      console.log("start=>", start);
      curr_sum -= arr[start];
      start++;
    }
    if (curr_sum == sum) {
      let p = i - 1;
      console.log("Sum found between " + start + " and " + p);
      return 1;
    }
    if (i < n) {
      curr_sum += arr[i];
    }
  }
  console.log("No subarray found");
  return 0;
};

// time complexity O(n^2) and space O(1)
// Need efficient method
// const subArray = (arr, n, sum) => {
//   let currentSum = 0;

//   for (let i = 0; i < n; i++) {
//     currentSum = arr[i];

//     for (let j = i + 1; j < n; j++) {
//       if (currentSum == sum) {
//         let p = j - 1;
//         console.log("Sum found between indexes " + i + " and " + p);
//         return 1;
//       }
//       if (currentSum > sum || j == n) {
//         break;
//       }
//       currentSum += arr[j];
//     }
//   }
//   console.log("No subarray found");
//   return 0;
// };

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = arr.length;
let sum = 15;

subArraySum(arr, n, sum);
