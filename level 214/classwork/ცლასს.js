class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.size++;
    }

    prepend(data) {
        const newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;

        this.size++;
    }


    find(data) {
        let current = this.head;

        while (current !== null) {
            if (current.data === data) {
                return true;
            }

            current = current.next;
        }

        return false;
    }


    delete(data) {
        if (!this.head) return false;

        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head;

        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                this.size--;
                return true;
            }

            current = current.next;
        }

        return false;
    }


}

