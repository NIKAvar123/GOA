let numbers = [12, 18, 24, 30, 33, 36, 40, 48];

let divisibleBy12 = numbers.filter(function(num) {
  return num % 12 === 0;
});

console.log(divisibleBy12); // [12, 24, 36, 48]

