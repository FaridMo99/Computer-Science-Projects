function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

export default function mergeSortAndRemoveDupes(arr) {
  const sortedArray = mergeSort(arr);
  //remove dupes
  for (let i = sortedArray.length - 1; i > 0; i--)
    if (sortedArray[i] === sortedArray[i - 1]) {
      sortedArray.splice(i, 1);
    }

  return sortedArray;
}
