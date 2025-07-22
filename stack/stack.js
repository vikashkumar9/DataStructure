class Stack {
  constructor() {
    this.data = [];
  }

  push(element) {
    this.data.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.data.pop();
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  print() {
    console.log(this.data.join(" -> "));
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);

console.log("Top element:", s.peek());
console.log("Popped element:", s.pop());

s.print();
