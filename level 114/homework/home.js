// 1. Product კლასი
class Product {
  constructor(name, price) {
    this.name = name;
    this._price = 0;
    this.price = price; // Setter-ის საშუალებით ინიცირება
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (value < 0) {
      throw new Error("ფასი არ შეიძლება იყოს უარყოფითი.");
    }
    this._price = value;
  }
}

// 2. Rectangle კლასი
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get area() {
    return this._width * this._height;
  }

  set size({ width, height }) {
    if (width < 0 || height < 0) {
      throw new Error("ზომები არ შეიძლება იყოს უარყოფითი.");
    }
    this._width = width;
    this._height = height;
  }
}

// 3. User კლასი
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const parts = value.split(" ");
    if (parts.length !== 2) {
      throw new Error("სრული სახელი უნდა შეიცავდეს სახელს და გვარს.");
    }
    [this.firstName, this.lastName] = parts;
  }
}

// 4. MathHelper კლასი
class MathHelper {
  static sum(a, b) {
    return a + b;
  }
}

// 5. Account კლასი
class Account {
  #balance = 0;

  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  get balance() {
    return this.#balance;
  }

  set balance(value) {
    if (value < 0) {
      throw new Error("ბალანსი არ შეიძლება იყოს უარყოფითი.");
    }
    this.#balance = value;
  }
}
