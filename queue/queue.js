class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(element) {
    this.data.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.data.shift();
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  print() {
    console.log(this.data.join(" -> "));
  }
}

// Test
let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

q.peek();
q.dequeue();
q.print();
