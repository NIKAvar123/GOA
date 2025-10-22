
//1
function sumEvenOdd(numbers) {
  let evenSum = 0;
  let oddSum = 0;

  for (let num of numbers) {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }

  return {
    even: evenSum,
    odd: oddSum
  };
}

console.log(sumEvenOdd([1, 2, 3, 4, 5, 6])); 

//1 .ts!!!
// function sumEvenOdd(numbers: number[]): { evenSum: number, oddSum: number } {
//   let evenSum = 0;
//   let oddSum = 0;

//   for (let num of numbers) {
//     if (num % 2 === 0) {
//       evenSum += num;
//     } else {
//       oddSum += num;
//     }
//   }

//   return { evenSum, oddSum };
// }

// console.log(sumEvenOdd([1, 2, 3, 4, 5])); 


