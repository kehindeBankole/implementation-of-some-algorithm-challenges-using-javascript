class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyList {
  constructor() {
    this.length = null;
    this.tail = null;
    this.head = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse() {
    var current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    console.log(current.val);
    console.log(newTail.val);
  }
}

var list = new SinglyList();

list.push("hello");
list.push("hy");
list.push("hey");
list.push("heooy");
list.pop()
console.log(list);
// // var first = new Node("hi")
// // first.next=new Node("there")
// // first.next.next=new Node("how")
// list.pop();
// console.log(list.tail);
