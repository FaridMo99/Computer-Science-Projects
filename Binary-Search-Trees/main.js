import { Tree, buildTree } from "./module.js";

const array = [2, 5, 6, 2, 5, 12, 643, 12, 65, 23, 87, 33];
const testTree = new Tree(array);

console.log(testTree.root);

/* Write a driver script that does the following:

Create a binary search tree from an array of random numbers < 100. 
You can create a function that returns an array of random numbers every time you call it if you wish.

Confirm that the tree is balanced by calling isBalanced.

Print out all elements in level, pre, post, and in order.

Unbalance the tree by adding several numbers > 100.

Confirm that the tree is unbalanced by calling isBalanced.

Balance the tree by calling rebalance.

Confirm that the tree is balanced by calling isBalanced.

Print out all elements in level, pre, post, and in order.
*/
