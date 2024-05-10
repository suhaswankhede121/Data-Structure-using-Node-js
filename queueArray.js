class Queue {
    constructor() {
      this.items = [];
    }
  
    // add element to the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // remove element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    // get the front element of the queue
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
    }
  
    // check if the queue is empty
    isEmpty() {
      return this.items.length == 0;
    }
  
    // get the size of the queue
    size() {
      return this.items.length;
    }
  
    // print the queue elements
    printQueue() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }
  
  // Example usage:
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue);
  console.log(queue.dequeue());
  //console.log(queue.printQueue()); // output: "1 2 3"
  //console.log(queue.front()); // output: 1
  //console.log(queue.dequeue()); // output: 1
  //console.log(queue.printQueue()); // output: "2 3"
  