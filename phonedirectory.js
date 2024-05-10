class Node {
    constructor(name, phoneNumber) {
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.prev = null;
      this.next = null;
    }
  }
  class PhoneDirectory {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    addEntry(name, phoneNumber) {
      const newNode = new Node(name, phoneNumber);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    deleteEntry(name) {
      let current = this.head;
      while (current !== null) {
        if (current.name === name) {
          if (current === this.head && current === this.tail) {
            // only one node in the list
            this.head = null;
            this.tail = null;
          } else if (current === this.head) {
            // deleting the head node
            this.head = current.next;
            this.head.prev = null;
          } else if (current === this.tail) {
            // deleting the tail node
            this.tail = current.prev;
            this.tail.next = null;
          } else {
            // deleting a node in the middle of the list
            current.prev.next = current.next;
            current.next.prev = current.prev;
          }
          this.size--;
          return true; // entry deleted successfully
        }
        current = current.next;
      }
      return false; // entry not found
    }
  
    searchEntry(name) {
      let current = this.head;
      while (current !== null) {
        if (current.name === name) {
          return current.phoneNumber;
        }
        current = current.next;
      }
      return null; // entry not found
    }
  
    printDirectory() {
      let current = this.head;
      while (current !== null) {
        console.log(`${current.name}: ${current.phoneNumber}`);
        current = current.next;
      }
    }
  }
  const phoneDirectory = new PhoneDirectory();
console.log("Add the contacts on my Contact list")
  phoneDirectory.addEntry('suhas', '8767276469');
  phoneDirectory.addEntry('Dip', '8393738222');
  phoneDirectory.addEntry('Ashwin', '9738198191');
  phoneDirectory.printDirectory();
  console.log("Search Contact from my contact list")
  console.log(phoneDirectory.searchEntry('suhas')); // '555-1234'
  console.log(phoneDirectory.searchEntry('Ashwin')); // null
  phoneDirectory.printDirectory();
  console.log("delete the contact from my contact list")
  phoneDirectory.deleteEntry('Ashwin');
  
  phoneDirectory.printDirectory();
  //
      