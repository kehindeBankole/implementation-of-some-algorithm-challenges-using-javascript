class Stack {
  constructor() {
    this.maxLength = 5;
    this.arr = [];
  }

  push(val) {
    this.arr.push(val);
  }

  pop() {
    this.arr.pop();
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  isFull() {
    return this.arr.length === this.maxLength;
  }

  top() {
    if (!this.isEmpty()) {
      return this.arr[0];
    }
  }
}

const data = new Stack();
data.push('1');
data.push('2');
data.push('3');
data.push('4');
data.push('5');



console.log(data.top());
