class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

function preorder(root) {
  //base case
  if (root === null) return;

  console.log(root.value);
  preorder(root.left);
  preorder(root.right);
}
preorder(root);
