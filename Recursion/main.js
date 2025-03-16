import mergeSort from "./mergeSort.js";

function fibs(n) {
  let arr = [0, 1];

  if (n <= 0) return 0;
  if (n === 1) return 1;

  if (n >= 2) {
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr;
}

function fibsRec(n, arr = [0, 1]) {
  console.log("This was printed recursively " + n + " times");
  if (n <= 2) return arr;

  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibsRec(n - 1, arr);
}

console.log(fibs(8));

console.log(fibsRec(8));

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
