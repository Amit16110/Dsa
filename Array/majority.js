const findMajority = (arr, n) => {
  let maxCount = 0;
  let index = -1;

  for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }

  if (maxCount > n / 2) {
    console.log(arr[index]);
  } else {
    console.log("No Majority Elements");
  }
};

let arr = [4, 4, 4, 4, 2, 3, 4];
let n = arr.length;

findMajority(arr, n);
