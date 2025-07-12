//1
const people = new Map([
  ["ანა", 25],
  ["ნიკო", 30],
  ["ლევანი", 22]
]);

// განვაახლოთ ნიკოს ასაკი
people.set("ნიკო", 31);

// წავშალოთ ლევანი
people.delete("ლევანი");

console.log(people); 
// Map(2) { 'ანა' => 25, 'ნიკო' => 31 }


//-------------------------------------------------------------------------------------------

//2
const books = new Map([
  ["1984", "ჯორჯ ორუელი"],
  ["მარადიული მზე", "ხალედ ჰოსეინი"],
  ["მარტოობის ასი წელიწადი", "გაბრიელ გარსია მარკესი"]
]);

for (const [title, author] of books) {
  console.log(`${title} - ${author}`);
}

// შედეგი:
// 1984 - ჯორჯ ორუელი
// მარადიული მზე - ხალედ ჰოსეინი
// მარტოობის ასი წელიწადი - გაბრიელ გარსია მარკესი


//-------------------------------------------------------------------------------------------

//3
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

const students = new Map();
students.set(101, new Student("გიორგი", 90));
students.set(102, new Student("ნანა", 85));
students.set(103, new Student("ლუკა", 92));

for (const [id, student] of students) {
  console.log(`ID: ${id}, Name: ${student.name}, Grade: ${student.grade}`);
}


//-----------------------------------------------------------------------------------------------------------

//4
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const products = new Map();
products.set(1, new Product("ლეპტოპი", 2500));
products.set(2, new Product("ტელეფონი", 1200));
products.set(3, new Product("ყურსასმენი", 150));

for (const [id, product] of products) {
  console.log(`${product.name} ღირს ${product.price} ლარი`);
}


//------------------------------------------------------------------------------------------------------------\

//5
function countWords(text) {
  const map = new Map();
  const words = text.toLowerCase().split(/\s+/);

  for (const word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  return map;
}

const input = "apple banana apple mango banana apple";
const wordCounts = countWords(input);

for (const [word, count] of wordCounts) {
  console.log(`${word}: ${count}`);
}

// შედეგი
// apple: 3
// banana: 2
// mango: 1
