import mergeSort from "../Recursion/mergeSort.js";

export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(array) {
    this.array = buildTree(array);
    this.root = this.array[Math.floor(this.array.length / 2)];
  }

  insert(value) {}

  deleteItem(value) {
    //You’ll have to deal with several cases for delete, such as when a node has children or not.
    // If you need additional resources, check out these two articles on inserting and deleting,
    // or this video on BST inserting/removing with several visual examples.
  }

  levelOrder(callback) {
    //levelOrder should traverse the tree in breadth-first level order and call the callback on each node as it traverses,
    // passing the whole node as an argument, similarly to how Array.prototype.forEach might work for arrays.
    // levelOrder may be implemented using either iteration or recursion (try implementing both!).
    // If no callback function is provided, throw an Error reporting that a callback is required.
    // Tip: You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse
    // and to add new ones to the list (video on level order traversal).
  }

  inOrder(callback) {
    // Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback.
    // The functions should throw an Error if no callback is given as an argument, like with levelOrder.
  }
  preOrder(callback) {
    // Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback.
    // The functions should throw an Error if no callback is given as an argument, like with levelOrder.
  }
  postOrder(callback) {
    // Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback.
    // The functions should throw an Error if no callback is given as an argument, like with levelOrder.
  }

  find(value) {
    //Write a find(value) function that returns the node with the given value.
  }

  height(node) {
    //returns the given node’s height. Height is defined as the number of edges in the longest path from a given node to a leaf node.
  }

  depth(node) {
    //that returns the given node’s depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.
  }

  isBalanced() {
    //checks if the tree is balanced.
    // A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.
  }

  rebalance() {
    //that rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
  }
}

export function buildTree(array) {
  const sortedArray = mergeSort(array);

  //remove dupes
  for (let i = sortedArray.length - 1; i > 0; i--)
    if (sortedArray[i] === sortedArray[i - 1]) {
      sortedArray.splice(i, 1);
    }

  return sortedArray;
}
