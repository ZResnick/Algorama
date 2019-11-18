module.exports = class BinarySearchTree {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.val) {
      if (this.left) this.left.insert(value);
      else this.left = new BinarySearchTree(value);
    } else {
      // eslint-disable-next-line no-lonely-if
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinarySearchTree(value);
      }
    }
    return this;
  }
};
