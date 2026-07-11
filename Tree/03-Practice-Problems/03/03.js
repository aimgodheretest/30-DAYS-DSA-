class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(15);
root.left = new TreeNode(8);
root.right = new TreeNode(25);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(12);

function findMax(root) {
  if (root === null) return -1;

  let leftMax = findMax(root.left);
  let rightMax = findMax(root.right);

  return Math.max(root.value, leftMax, rightMax);
}

console.log(findMax(root));
