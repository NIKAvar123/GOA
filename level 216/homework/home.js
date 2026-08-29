class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// =======================
// 1) push, peek, size, isEmpty
// =======================

const stack1 = new Stack();

stack1.push(10);
stack1.push(20);
stack1.push(30);

console.log("Task 1");
console.log("Top:", stack1.peek());
console.log("Size:", stack1.size());
console.log("Is Empty:", stack1.isEmpty());

// =======================
// 2) წაშალე ბოლო 2 ელემენტი
// =======================

const stack2 = new Stack();

stack2.push(5);
stack2.push(10);
stack2.push(15);
stack2.push(20);
stack2.push(25);

stack2.pop();
stack2.pop();

console.log("\nTask 2");
console.log(stack2.items);

// =======================
// 4) ყოველი დამატების შემდეგ peek()
// =======================

const stack3 = new Stack();

console.log("\nTask 4");

stack3.push(100);
console.log(stack3.peek());

stack3.push(200);
console.log(stack3.peek());

stack3.push(300);
console.log(stack3.peek());

stack3.push(400);
console.log(stack3.peek());

// =======================
// 6) მხოლოდ ლუწი რიცხვები
// =======================

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const stack4 = new Stack();

for (let num of numbers) {
    if (num % 2 === 0) {
        stack4.push(num);
    }
}

console.log("\nTask 6");
console.log(stack4.items);