import linkedList from "./linkedList.js";

const newList = linkedList();

newList.append("Book");
newList.append("Gamepad");
newList.append("Clothes");
newList.prepend("Food");
console.log(newList.print());


