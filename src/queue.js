const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.items = []
  }
  getUnderlyingList() {

    let tempResult
    if (this.value == null) {
      return null
    } else {
      tempResult = { value: this.value, next: this.next }
    }
    let tempList = this
    let temp = tempResult
    while (tempList.next) {
      tempList = tempList.next
      temp.next = { value: tempList.value, next: tempList.next }
      temp = temp.next
    }
    return tempResult
  }

  enqueue(value) {
    const newNode = new ListNode(value)

    if (!this.value) {
      this.value = value
      this.next = null
    } else {
      let tempList = this
      while (tempList.next) {
        tempList = tempList.next
      }
      tempList.next = newNode
    }
  }

  dequeue() {
    if (!this.value) {
      return undefined
    }
    const temp = this.value
    this.value = this.next.value
    let temp2 = this.next
    this.next = null
    this.next = temp2.next
    return temp
  }
}

module.exports = {
  Queue
};
