class HashTable {
    constructor(size) {
    this.table = new Array(size);
    this.size = size;
    }
    
    hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
    }
    return total % this.size;
    }
    
    set(key, value) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
    bucket = [];
    this.table[index] = bucket;
    }
    let found = false;
    for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
    bucket[i][1] = value;
    found = true;
    break;
    }
    }
    if (!found) {
    bucket.push([key, value]);
    }
    }
    
    get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
    return undefined;
    }
    for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
    return bucket[i][1];
    }
    }
    return undefined;
    }
    
    display() {
    for (let i = 0; i < this.table.length; i++) {
    const bucket = this.table[i];
    if (bucket) {
    for (let j = 0; j < bucket.length; j++) {
    console.log(bucket[j][0], bucket[j][1]);
    }
    }
    }
    }
    }
    
    const table = new HashTable(10);
    table.set("name", "suhas");
    table.set("age", 22);
    table.set("city", "Bangalore");
    table.display(); // Output: "name suhas", "age 22", "city Bangalore"
    console.log(table.get("city"));
    
    
    
    