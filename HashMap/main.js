import HashMap from "./module.js";

const test = new HashMap(0.75);

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("apple", "green");
test.set("banana", "green");
test.set("carrot", "yellow");

test.set("moon", "silver");

console.log(test.length());
console.log(test.capacity);

console.log(test.get("apple"));
console.log(test.get("banana"));
console.log(test.get("carrot"));
console.log(test.get("dog"));

console.log(test.has("elephant"));
console.log(test.has("frog"));

test.remove("grape");

console.log(test.length());

test.clear();
console.log(test.length());

console.log(test.keys());
console.log(test.values());
console.log(test.entries());
