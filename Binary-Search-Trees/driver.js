import Tree from "./module.js";
import mergeSort from "../Recursion/mergeSort.js";
const randomArray = randomArraySmallerThanHundred(20);
const testTree = new Tree(randomArray);

function randomArraySmallerThanHundred(arrSize) {
  if (arrSize === 100) {
    throw new Error("Input bigger than 99");
  }
  let arr = [];
  for (let i = 0; i < arrSize; i++) {
    arr.push(Math.floor(Math.random() * 99) + 1);
  }
  return arr;
}
