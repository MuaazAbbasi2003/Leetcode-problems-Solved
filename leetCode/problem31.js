class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
function maxLevelSum(root) {
  if (root === null) return [];
  let queue = [root];
  let result = -Infinity;
  let currentlevel = 0;
  let maxLevel = 0;

  while (queue.length > 0) {
    let levelSize = queue.length;
    let level = 0;

    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      level += curr.val;
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    currentlevel++;

    if (result < level) {
      result = level;
      maxLevel = currentlevel;
    }
  }
  return maxLevel;
}

let root = new TreeNode(10);
root.left = new TreeNode(11);
root.right = new TreeNode(9);
root.left.left = new TreeNode(7);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(8);

console.log(maxLevelSum(root));
