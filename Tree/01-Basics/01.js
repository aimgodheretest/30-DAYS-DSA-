//Binary Tree Node Implementation;
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
let root = new TreeNode(10);
root.left = new TreeNode(20);
root.right = new TreeNode(30);

console.log(root);
