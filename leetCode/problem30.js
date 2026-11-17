class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
function levelOrder(root) {
  if (root === null) return [];
  let queue = [root];
  let val = [];
  while (queue.length > 0) {
    let levelSize = queue.length;
    for (let index = 0; index < levelSize; index++) {
      const element = queue[index];
      let curr = queue.shift();
      if (index === levelSize - 1) {
        val.push(curr.val);
      }
      if (curr.left !== null) {
        queue.push(curr.left);
      }
      if (curr.right !== null) {
        queue.push(curr.right);
      }
    }
  }
  return val;
}

let root = new TreeNode(10);
root.left = new TreeNode(11);
root.right = new TreeNode(9);
root.left.left = new TreeNode(7);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(8);

console.log(levelOrder(root));
