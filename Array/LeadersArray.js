const leaderArray = (arr, n) => {
  for (let i = 0; i < n; i++) {
    let j;
    for (j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) {
        break;
      }
    }
    console.log(j, "this is outsider loop");
    if (j == n) {
      console.log(j, "this is j");
      console.log(arr[i] + " ");
    }
  }
};

let arr = [5, 1, 3, 2, 4, 0];
let n = arr.length;

leaderArray(arr, n);
