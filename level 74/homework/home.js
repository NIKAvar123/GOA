// მა
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}


const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("BMW", "X5", 2019);
const car3 = new Car("Mercedes", "C-Class", 2021);


function Animal(type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;
}

const animal1 = new Animal("Dog", "Rex", 5);
const animal2 = new Animal("Cat", "Mimi", 3);
const animal3 = new Animal("Parrot", "Coco", 2);


function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}


const student1 = new Student("Giorgi", 15, "9th Grade");
const student2 = new Student("Nino", 16, "10th Grade");
const student3 = new Student("Luka", 14, "8th Grade");

console.log(car1, car2, car3);
console.log(animal1, animal2, animal3);
console.log(student1, student2, student3);
