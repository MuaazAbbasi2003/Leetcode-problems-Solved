var maxDepth = function (root) {
  if (root === null) {
    return -1;
  }
  let lHeight = maxDepth(root.left);
  let rHeight = maxDepth(root.right);

  return Math.max(lHeight, rHeight) + 1;
};
