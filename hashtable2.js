class HashTable {
    constructor(size = 53) {
      this.keyMap = new Array(size);
    }
  
    // private helper function to hash keys
    _hash(key) {
      let total = 0;
      const prime = 31;
  
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        const char = key[i];
        const value = char.charCodeAt(0) - 96;
        total = (total * prime + value) % this.keyMap.length;
      }
  
      return total;
    }
  
    // public method to add a key-value pair to the hash table
    set(key, value) {
      const index = this._hash(key);
  
      if (!this.keyMap[index]) {
        this.keyMap[index] = [];
      }
  
      this.keyMap[index].push({ key, value });
    }
  
    // public method to retrieve the value of a key in the hash table
    get(key) {
      const index = this._hash(key);
  
      if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
          if (this.keyMap[index][i].key === key) {
            return this.keyMap[index][i].value;
          }
        }
      }
  
      return undefined;
    }
  
    // public method to remove a key-value pair from the hash table
    remove(key) {
      const index = this._hash(key);
  
      if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
          if (this.keyMap[index][i].key === key) {
            this.keyMap[index].splice(i, 1);
            return true;
          }
        }
      }
  
      return false;
    }
  
    // public method to display the contents of the hash table
    display() {
      const result = {};
  
      for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
          for (let j = 0; j < this.keyMap[i].length; j++) {
            result[i] = this.keyMap[i][j];
          }
        }
      }
  
      return result;
    }
  }
  
  // test the implementation
  const hashTable = new HashTable();
  
  hashTable.set("apple", 2);
  hashTable.set("banana", 4);
  hashTable.set("orange", 1);
  
  console.log("Get 'apple': ", hashTable.get("apple")); // 2
  console.log("Get 'banana': ", hashTable.get("banana")); // 4
  console.log("Get 'orange': ", hashTable.get("orange")); // 1
  
  hashTable.remove("banana");
  
  console.log("After removing 'banana': ", hashTable.display());
  