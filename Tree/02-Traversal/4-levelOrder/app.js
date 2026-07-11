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

//create function levelOrder
function levelOrder(root) {
  //check if root is empty or not if empty return;
  if (root === null) return;
  //create a queue
  let q = [];
  //add root into queue
  q.push(root);
  //wwhile queue is empty
  while (q.length) {
    //remove first node
    let firstNode = q.shift();
    //print it
    console.log(firstNode.value);
    //add left child
    if (firstNode.left) {
      q.push(firstNode.left);
    }
    //add right
    if (firstNode.right) {
      q.push(firstNode.right);
    }
  }
}
levelOrder(root);
