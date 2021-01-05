function transitionPt(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      return i;
    }
  }
  return -1;
}

let arr = [0, 0, 0, 1, 1, 1];
let n = arr.length;

let pt = transitionPt(arr, n);
console.log(pt);
