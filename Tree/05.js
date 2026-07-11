// Search a Value in Binary Tree
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function searchValue(root, target) {
  if (root === null) return false;

  if (root.value === target) return true;

  return searchValue(root.left, target) || searchValue(root.right, target);
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(searchValue(root, 3));
console.log(searchValue(root, 6));
