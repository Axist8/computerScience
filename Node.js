class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    getNextNode() {
        return this.getNextNode;
    }
    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error('Not a Node');
        }
    }
}

module.exports = Node;