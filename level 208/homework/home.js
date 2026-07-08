

// განსხვავება Singly Linked List-სა და Doubly Linked List-ს შორის

// Singly Linked List
// - თითოეულ Node-ს აქვს მხოლოდ next.
// - სიაში გადაადგილება შესაძლებელია მხოლოდ წინ.
// - ნაკლებ მეხსიერებას იყენებს, რადგან მხოლოდ ერთი მისამართი ინახება.
// - ელემენტის წაშლა შედარებით რთულია, რადგან წინა ელემენტის პოვნა გვჭირდება.
// - სტრუქტურა მარტივია და რეალიზაციაც უფრო ადვილია.

// Doubly Linked List
// - თითოეულ Node-ს აქვს next და prev.
// - სიაში გადაადგილება შესაძლებელია როგორც წინ, ისე უკან.
// - მეტ მეხსიერებას იყენებს, რადგან ორი მისამართი ინახება.
// - ელემენტის წაშლა უფრო მარტივია, რადგან ვიცით როგორც წინა, ისე შემდეგი ელემენტი.
// - სტრუქტურა უფრო მოქნილია და მეტი ოპერაციის შესრულება არის შესაძლებელი.










// Node კლასი - ინახავს მონაცემს, შემდეგ და წინა ელემენტს
class Node {
    constructor(data) {
        this.data = data;   // მონაცემი
        this.next = null;   // შემდეგი ელემენტი
        this.prev = null;   // წინა ელემენტი
    }
}

// Doubly Linked List კლასი
class DoublyLinkedList {
    constructor() {
        this.head = null; // სიის პირველი ელემენტი
    }

    // ელემენტის დამატება ბოლოში
    append(data) {
        const newNode = new Node(data);

        // თუ სია ცარიელია
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        // მივდივართ ბოლო ელემენტამდე
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        // ვამატებთ ახალ ელემენტს
        current.next = newNode;
        newNode.prev = current;
    }

    // ელემენტის დამატება დასაწყისში
    prepend(data) {
        const newNode = new Node(data);

        // თუ სია ცარიელი არ არის
        if (this.head !== null) {
            newNode.next = this.head;
            this.head.prev = newNode;
        }

        // ახალი ელემენტი ხდება head
        this.head = newNode;
    }

    // ელემენტის ძებნა
    search(data) {
        let current = this.head;

        while (current !== null) {
            if (current.data === data) {
                return true;
            }

            current = current.next;
        }

        return false;
    }

    // ელემენტის წაშლა
    delete(data) {
        if (this.head === null) {
            return;
        }

        let current = this.head;

        // ვეძებთ წასაშლელ ელემენტს
        while (current !== null && current.data !== data) {
            current = current.next;
        }

        // თუ ვერ მოიძებნა
        if (current === null) {
            return;
        }

        // თუ პირველი ელემენტია
        if (current.prev === null) {
            this.head = current.next;

            if (this.head !== null) {
                this.head.prev = null;
            }
        } else {
            current.prev.next = current.next;

            if (current.next !== null) {
                current.next.prev = current.prev;
            }
        }
    }

    // სიის დაბეჭდვა წინ
    displayForward() {
        let current = this.head;

        while (current !== null) {
            process.stdout.write(current.data + " <-> ");
            current = current.next;
        }

        console.log("null");
    }

    // სიის დაბეჭდვა უკან
    displayBackward() {
        if (this.head === null) {
            return;
        }

        let current = this.head;

        // მივდივართ ბოლო ელემენტამდე
        while (current.next !== null) {
            current = current.next;
        }

        // ვბეჭდავთ უკუღმა
        while (current !== null) {
            process.stdout.write(current.data + " <-> ");
            current = current.prev;
        }

        console.log("null");
    }
}

// =======================
// ტესტირება
// =======================

const list = new DoublyLinkedList();

// ბოლოში დამატება
list.append(10);
list.append(20);
list.append(30);

// დასაწყისში დამატება
list.prepend(5);

console.log("Forward:");
list.displayForward();

console.log("Backward:");
list.displayBackward();

console.log("Search 20:", list.search(20));
console.log("Search 100:", list.search(100));

console.log("Delete 20");
list.delete(20);

list.displayForward();