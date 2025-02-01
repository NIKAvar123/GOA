

(JavaScript)
class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }

    describe() {
        console.log(`${this.name} არის ${this.species}, ასაკი: ${this.age} წელი.`);
    }
}

// მაგალითი
const animal = new Animal("ბობი", "ძაღლი", 5);
animal.describe();
