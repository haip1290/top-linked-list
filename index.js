import Node from "./node.js";
import LinkedList from "./linked-list.js";

let list = new LinkedList();
console.log(list.size());

list.append(13);
list.append(14);
list.prepend(12);
list.toString();

console.log(list.size());
let list2 = new LinkedList();
console.log(list2.size());

console.log("head", list.head);
console.log("tail", list.tail());
let index = 0;
console.log(`at index ${index}`, list.at(index));
index = 2;
console.log(`at index ${index}`, list.at(index));

list.pop();
list.toString();

list.append(14);
list.append(15);
console.log(list.contain(11));
console.log(list.contain(13));

list.toString();
console.log(list.find(12));
console.log(list.find(14));
console.log(list.find(11));

list.toString();
list.insertAt(11, 8);
list.toString();
list.insertAt(10, 0);
list.toString();
list.insertAt(2, 2);
list.toString();

list.removeAt(0);
list.toString();

list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.toString();
