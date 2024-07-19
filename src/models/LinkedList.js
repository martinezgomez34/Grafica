class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    search(data) {
      let current = this.head;
      let index = 0;
      while (current) {
        if (current.data === data) {
          return index;
        }
        current = current.next;
        index++;
      }
      return -1;
    }
  
    toArray() {
      const array = [];
      let current = this.head;
      while (current) {
        array.push(current.data);
        current = current.next;
      }
      return array;
    }
  }
  
  const linkedList = new LinkedList();
  
  function insertLinkedList(data) {
    const startTime = performance.now();
    data.forEach(item => linkedList.insert(item));
    const endTime = performance.now();
    return { data: linkedList.toArray(), time: endTime - startTime };
  }
  
  function searchLinkedList(item) {
    const startTime = performance.now();
    const index = linkedList.search(item);
    const endTime = performance.now();
    return { index, time: endTime - startTime };
  }
  
  function getLinkedListData() {
    return linkedList.toArray();
  }
  
  export { insertLinkedList, searchLinkedList, getLinkedListData };