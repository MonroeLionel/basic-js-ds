const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(root = null) {
    this._root = root
  }

  root() {
    return this._root
  }

  add(data) {
    const newNode = new Node(data)
    if (this._root === null) {
      this._root = newNode
      return
    }
    let current = this._root

    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode
          return
        }
        current = current.left
      }
      else if (data > current.data) {
        if (current.right === null) {
          current.right = newNode
          return
        }
        current = current.right
      } else {
        return
      }
    }
  }

  find(data) {
    let current = this._root
    if (data === current.data) {
      return this._root
    }
    while (true) {
      if (data > current.data) {
        current = current.right
        if (current === null) {
          return null
        }
      } else {
        current = current.left
        if (current === null) {
          return null
        }
      }
      if (data === current.data) {
        return current
      }
      if (current.data == null) {
        return null
      }
    }


  }


  has(data) {
    let current = this._root
    if (data === current.data) {
      return true
    }
    while (true) {
      if (data > current.data) {
        current = current.right
        if (current === null) {
          return false
        }
      } else {
        current = current.left
        if (current === null) {
          return false
        }
      }
      if (data === current.data) {
        return true
      }
      if (current.data == null) {
        return false
      }
    }
  }

  remove(data) {

    this._root = removeNode(this._root, data)

    function removeNode(node, data) {
      if (!node) return null
      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node

      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node

      } else {

        if (node.left === null && node.right === null) {
          return null
        }
        if (node.left === null) {
          return node.right
        }
        if (node.right === null) {
          return node.left
        }
        let minRight = node.right
        while (minRight.left) {
          minRight = minRight.left
        }
        node.data = minRight.data
        node.right = removeNode(node.right, minRight.data)
        return node
      }
    }

  }

  min() {
    let current = this._root
    while (current.left) {
      current = current.left
    }
    return current.data
  }

  max() {
    let current = this._root
    while (current.right) {
      current = current.right
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};