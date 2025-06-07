//_____________________________
const colors = ["red", "green", "blue", "yellow", "purple"];

const [firstColor, secondColor, ...otherColors] = colors;

console.log(firstColor);   // "red"
console.log(secondColor);  // "green"
console.log(otherColors);  // ["blue", "yellow", "purple"]




//___________________________



const user = {
  name: "Nino",
  age: 25,
  country: "Georgia"
};

const { name, country } = user;

console.log(name);     // "Nino"
console.log(country);  // "Georgia"






//____________________________

const book = {
  title: "Clean Code",
  author: "Robert C. Martin"
};

const { title: bookTitle, author: bookAuthor } = book;

console.log(bookTitle);   // "Clean Code"
console.log(bookAuthor);  // "Robert C. Martin"




//____________________________

const person = {
  name: "Luka",
  address: {
    city: "Tbilisi",
    zip: "0101"
  }
};

const { address: { city } } = person;

console.log(city);  // "Tbilisi"




//____________________________


function printUser({ name, age }) {
  console.log(`User: ${name}, Age: ${age}`);
}

printUser({ name: "Nino", age: 25 });  // User: Nino, Age: 25
