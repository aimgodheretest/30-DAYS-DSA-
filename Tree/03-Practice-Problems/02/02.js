class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//8,3,10,1,6
let root = new TreeNode(8);
root.left = new TreeNode(3);
root.right = new TreeNode(10);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);

function inOrder(root) {
  //base case
  if (root === null) return;

  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
}
inOrder(root);
