import node from "./node.js";

export default function linkedList() {
  let head = null;
  let tail = null;

  const prepend = (value) => {
    head = node(value, head);
    tail = head;
  };

  const append = (value) => {
    if (head === null) return prepend(value);
    tail.nextNode = node(value, null);
    tail = tail.nextNode;
  };

  const getSize = () => {
    let count = 0;
    let currentNode = head;
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return `Number of nodes are: ${count}`;
  };

  const getHead = () => head;

  const getTail = () => tail;

  const atIndex = (index) => {
    if (index < 0) return "Invalid index";

    let currentNode = head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentIndex === index) return currentNode;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return "Out of bounds";
  };

  const pop = () => {
    if (head === null) return null;
    if (head.nextNode === null) return (head = null);

    let prevNode = null;
    let currentNode = head;

    while (currentNode.nextNode !== null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    prevNode.nextNode = null;
  };

  const contains = (value) => {
    let currentNode = head;
    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  };

  const find = (value) => {
    let index = 0;
    let currentNode = head;
    while (currentNode !== null) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.nextNode;
      index++;
    }
    return -1;
  };

  const print = () => {
    let nodes = [];
    let currentNode = head;
    while (currentNode !== null) {
      nodes.push(currentNode.value);
      currentNode = currentNode.nextNode;
    }
    return nodes.join(" -> ") + " -> null";
  };

  const insertAt = (value, index) => {
    if (index < 0) throw new Error("Index cannot be negative");
    if (index === 0) return prepend(value);

    let currentIndex = 0;
    let prevNode = null;
    let currentNode = head;

    while (currentNode !== null && currentIndex < index) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    if (currentIndex === index) {
      prevNode.nextNode = node(value, currentNode);
    } else {
      throw new Error("Index out of bounds");
    }
  };

  const removeAt = (index) => {
    if (index < 0) throw new Error("Index cannot be negative");
    if (head === null) throw new Error("Cannot remove from an empty list");
    if (index === 0) return (head = head.nextNode);

    let prevNode = null;
    let currentNode = head;
    let currentIndex = 0;

    while (currentNode !== null && currentIndex < index) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    if (currentIndex === index) {
      prevNode.nextNode = currentNode.nextNode;
    } else {
      throw new Error("Index out of bounds");
    }
  };

  return {
    prepend,
    append,
    getSize,
    getHead,
    getTail,
    atIndex,
    pop,
    contains,
    find,
    print,
    insertAt,
    removeAt,
  };
}
