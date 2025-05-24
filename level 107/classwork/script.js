const arr = ["Goa", "novatori", "step"];

const result = arr.map(item => {
  return item[0] === item[0].toUpperCase() ? "Good" : "Bad";
});

console.log(result);



const numbers = [11, 3, 1, 5, 6, 2, 0, 13];

const filtered = numbers.filter(num => num > 5);

console.log(filtered);






const strings = ["Hello", " ", "World", "!"];

const concatenated = strings.reduce((acc, curr) => acc + curr, "");

console.log(concatenated);




