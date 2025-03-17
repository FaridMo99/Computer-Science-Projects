import mergeSortAndRemoveDupes from "../Recursion/mergeSort.js";

export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class Tree {
  constructor(root) {
    this.root = buildTree(root);
  }

  insert(value) {
    const insertRecursively = (root, value) => {
      if (!root) return new Node(value);

      if (value < root.value) {
        root.left = insertRecursively(root.left, value);
      } else if (value > root.value) {
        root.right = insertRecursively(root.right, value);
      }

      return root;
    };

    this.root = insertRecursively(this.root, value);
  }

  deleteItem(value) {
    const deleteNode = (root, value) => {
      if (!root) return root;

      if (value < root.value) {
        root.left = deleteNode(root.left, value);
      } else if (value > root.value) {
        root.right = deleteNode(root.right, value);
      } else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        root.value = this.minValue(root.right);
        root.right = deleteNode(root.right, root.value);
      }

      return root;
    };

    this.root = deleteNode(this.root, value);
  }

  minValue(root) {
    let current = root;
    while (current.left) current = current.left;
    return current.value;
  }

  levelOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("No Callback passed");
    }

    if (!this.root) return;

    let queue = [this.root];

    while (queue.length > 0) {
      let node = queue.shift();
      callback(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  inOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("No Callback passed");
    }

    const traverseInOrder = (node) => {
      if (node) {
        traverseInOrder(node.left);
        callback(node);
        traverseInOrder(node.right);
      }
    };

    traverseInOrder(this.root);
  }

  preOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("No Callback passed");
    }

    const traversePreOrder = (node) => {
      if (node) {
        callback(node);
        traversePreOrder(node.left);
        traversePreOrder(node.right);
      }
    };

    traversePreOrder(this.root);
  }

  postOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("No Callback passed");
    }

    const traversePostOrder = (node) => {
      if (node) {
        traversePostOrder(node.left);
        traversePostOrder(node.right);
        callback(node);
      }
    };

    traversePostOrder(this.root);
  }

  find(value) {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }

  height(node) {
    if (!node) return -1;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  depth(node) {
    let current = this.root;
    let depth = 0;
    while (current !== null) {
      if (node.value < current.value) {
        current = current.left;
        depth++;
      } else if (node.value > current.value) {
        current = current.right;
        depth++;
      } else {
        return depth;
      }
    }
    return -1;
  }

  isBalanced() {
    const checkBalance = (node) => {
      if (!node) return true;

      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);

      return (
        Math.abs(leftHeight - rightHeight) <= 1 &&
        checkBalance(node.left) &&
        checkBalance(node.right)
      );
    };

    return checkBalance(this.root);
  }

  rebalance() {
    const nodes = [];

    this.inOrder((node) => {
      nodes.push(node.value);
    });

    this.root = buildTree(nodes);
  }
}

export function buildTree(array) {
  const sortedArray = mergeSortAndRemoveDupes(array);

  if (sortedArray.length === 0) return null;

  const mid = Math.floor(sortedArray.length / 2);
  const root = new Node(sortedArray[mid]);

  root.left = buildTree(sortedArray.slice(0, mid));
  root.right = buildTree(sortedArray.slice(mid + 1));

  return root;
}
