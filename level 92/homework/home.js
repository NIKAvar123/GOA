let number = parseInt(prompt("შეიყვანეთ რიცხვი:"));
let result = (number % 2 === 0) ? "Two" : number;
console.log(result);


let number2 = parseInt(prompt("შეიყვანეთ რიცხვი:"));
let result2 = (number2 % 2 === 0) ? number2 * 8 : number2 * 9;
console.log(result2);


function checkNumber(num) {
    return (num >= 0) ? "Positive" : "Negative";
  }
  
  // მაგალითი
  console.log(checkNumber(5));   // Positive
  console.log(checkNumber(-3));  // Negative

  

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // მაგალითი
  let myArray = [10, 20, 30, 40, 50];
  console.log(getRandomElement(myArray));  // მაგ: 30
  