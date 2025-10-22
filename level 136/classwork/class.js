
//1
function sayHello(name) {
  return `გამარჯობა, ${name}! სასიამოვნოა შენი ნახვა.`;
}

//2
console.log(sayHello("ნიკა"));



function calculator(a, b) {
  return {
    sum: a + b,
    product: a * b,
    difference: a - b
  };
}


console.log(calculator(10, 5));




//3
function multiply(a, b = 2) {
  return a * b;
}


console.log(multiply(5));
console.log(multiply(5, 3));  


//4
const names = ["ნინო", "გიორგი", "თამარ"];
console.log(names);



//5
const numbers = [3, 7, 12, 5, 9];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
