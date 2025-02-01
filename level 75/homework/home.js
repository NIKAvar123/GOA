class Car {
    constructor(brand, model, year, engineVolume) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.engineVolume = engineVolume;
    }

    getDescription() {
        return `${this.brand} ${this.model}, ${this.year}, ${this.engineVolume}L`;
    }
}
const myCar = new Car("Toyota", "Prius", 2018, 1.8);
console.log(myCar.getDescription()); 




class Book {
    constructor(title, author, pages, year) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
    }

    pagesPerDay() {
        return this.pages / 7; 
    }
}


const myBook = new Book("JavaScript Guide", "John Doe", 350, 2022);
console.log(`უნდა წაიკითხო დღეში: ${myBook.pagesPerDay()} გვერდი`); // Output: 50






class Athlete {
    constructor(name, age, sport, trainingHours) {
        this.name = name;
        this.age = age;
        this.sport = sport;
        this.trainingHours = trainingHours;
    }

    weeklyTrainingWithImprovement() {
        return this.trainingHours * 7 * 1.2; 
    }
}

// გამოყენება
const athlete = new Athlete("John", 25, "Basketball", 2);
console.log(`სპორტსმენი უნდა ვარჯიშობდეს კვირაში: ${athlete.weeklyTrainingWithImprovement()} საათი`); // Output: 16.8
