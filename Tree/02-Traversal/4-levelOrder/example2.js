//Example 2 (Return an Array Instead of Printing)
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

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

function levelOrder(root) {
  if (root === null) return [];

  let result = [];
  let q = [root];

  while (q.length) {
    let curr = q.shift();
    result.push(curr.value);

    if (curr.left) {
      q.push(curr.left);
    }
    if (curr.right) {
      q.push(curr.right);
    }
  }
  return result;
}
console.log(levelOrder(root));
