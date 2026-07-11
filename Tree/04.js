// sum of all node in a tree;
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sumOfAllNode(root) {
  if (root === null) return 0;

  return root.value + sumOfAllNode(root.left) + sumOfAllNode(root.right);
}
let root = new TreeNode(10);
root.left = new TreeNode(20);
root.right = new TreeNode(30);
root.left.left = new TreeNode(40);
root.left.right = new TreeNode(40);

console.log(sumOfAllNode(root));
