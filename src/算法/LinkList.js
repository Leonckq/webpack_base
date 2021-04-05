class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head')
  }

  append(newElement) {
    const newNode = new Node(newElement)
    let currentNode = this.head
    while(currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }

  findByValue(item) {
    let currentNode = this.head.next
    while(currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next
    }
    return currentNode !== null ? currentNode : -1
  }

  findByIndex(index) {
    let currentNode = this.head.next
    let pos = 0
    while(currentNode.next !== null && pos++ !== index) {
      currentNode = currentNode.next
    }
    return currentNode !== null ? currentNode : -1
  }

  insert(newElement, element) {
    let currentNode = this.findByValue(element)
    if (currentNode === -1) {
      console.log('未找到该元素')
      return
    }
    const newNode = new Node(newElement)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  findPrev(element) {
    let currentNode = this.head
    while(currentNode.next !== null && currentNode.next.element !== element) {
      currentNode = currentNode.next
    }
    if (currentNode.next === null) {
      console.log('未找到该元素')
      return -1
    }
    return currentNode
  }

  remove(element) {
    let prevNode = this.findPrev(element)
    if (prevNode === -1) {
      console.log('未找到该元素')
      return
    }
    prevNode.next = prevNode.next.next
  }
}