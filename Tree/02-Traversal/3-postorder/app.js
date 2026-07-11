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

function postOrder(root) {
  //base case
  if (root === null) return;

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
}
postOrder(root);
