class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (!current.left) {
            current.left = node;
            return;
          } else {
            current = current.left;
          }
        } else {
          if (!current.right) {
            current.right = node;
            return;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) {
      return false;
    } else {
      var current = this.root;
      var found = false;
      while (!found && current) {
        if (val < current.value) {
          current = current.left;
        } else if (val > current.value) {
          current = current.right;
        } else {
          found = true;
        }
      }
      if (!found) return false;
      return current;
    }
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(10);
// tree.root = new Node(10);

console.log(tree.find(16));
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.left = new Node(5);

// console.log(tree.root);
