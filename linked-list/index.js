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
  //  return this;
  }
}

var list = new SinglyList();
list.push("hello");
list.push("hy");
list.push("hey");
list.push("heooy");
// var first = new Node("hi")
// first.next=new Node("there")
// first.next.next=new Node("how")

console.log(list.head.next.next.next);
