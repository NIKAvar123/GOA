let age = parseInt(prompt("შეიყვანე ასაკი:"));
let result = (age > 18) ? "18-ზე მეტია" : "18 ან ნაკლებია";
console.log(result);

(condition1) ? value1 : (condition2) ? value2 : value3;

function compareNumbers(num1, num2) {
    let result = (num1 > num2) 
      ? `${num1} მეტია ${num2}-ზე` 
      : (num2 > num1) 
      ? `${num2} მეტია ${num1}-ზე` 
      : "Equal";
      
    console.log(result);
  }
  
  // ტესტი:
  compareNumbers(10, 5);   // 10 მეტია 5-ზე
  compareNumbers(3, 9);    // 9 მეტია 3-ზე
  compareNumbers(7, 7);    // Equal
  