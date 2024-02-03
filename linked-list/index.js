class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    for (let x = 0; x < this.length; x++) {
      if (current.next) {
        newTail = current;
      }
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return;
  }

  shift() {
    if (!this.head) return undefined;
    var current = this.head;
    this.head = current.next;
    this.length--;
  }

  traverse() {
    var current = this.head;
    for (let x = 0; x < this.length; x++) {
      current = current.next;
      console.log(current);
    }
  }

  unshift(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return;
    var count = 0;
    var current = this.head;

    while (count != index) {
      current = current.next;
      count++;
    }
    //console.log(current)
    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index !== 0) {
      var prevNode = this.get(index - 1);
      var nextNode = this.get(index);
      var node = new Node(val);
      prevNode.next = node;
      node.next = nextNode;
      //prevNode.next.next = nextNode;
      this.length++;
    } else {
      this.unshift(val);
    }
  }

  remove(index) {
    if (index === 0) {
      this.shift();
      return;
    }
    var prevNode = this.get(index - 1);
    var nextNode = this.get(index + 1);
    prevNode.next = nextNode;
    this.length--;
  }
}

var list = new SinglyList();
list.push('s');
list.push('12');
list.push('abn');
list.push('abnkk');
list.push('abnjj');
list.push('122');

list.traverse();
// list.push('212');
// list.unshift('new');
// list.set(1 , "ddj")
// list.insert(0, 'inserted');
// list.remove(0);
// console.log(list.get(0));
// console.log(list);
// console.log(list)
// list.traverse()
// list.pop();
// list.pop();
// list.pop();
// list.shift();

// write build command that takes argument from outside
//what is a lamda function
