const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newhead;
        if (currentHead) {
            this.head.setNextNode(currentHead)
        }
    }

    addToTail(data) {
        let tail = this.head;
        if (tail === null) {
            this.head = new Node(data);
        } else {
            while (tail.getNextNode()) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextHead();
        return removedHead;
    }
}

module.exports = LinkedList;