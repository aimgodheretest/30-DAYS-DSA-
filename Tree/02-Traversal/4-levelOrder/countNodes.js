//Example 3 (Count Total Nodes Using BFS)
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
  if (!root) return 0;

  let q = [root];
  let count = 0;

  while (q.length) {
    let curr = q.shift();
    count++;

    if (curr.left) {
      q.push(curr.left);
    }
    if (curr.right) {
      q.push(curr.right);
    }
  }
  return count;
}
console.log(levelOrder(root));
