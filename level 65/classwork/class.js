const stringNumbers = "1,2,3,4,5";
let intArray = [];
let currentNumber = "";

for (let i = 0; i < stringNumbers.length; i++) {
    if (stringNumbers[i] !== ',') {
        currentNumber += stringNumbers[i];
    } else {
        intArray.push(Number(currentNumber));
        currentNumber = "";
    }
}


if (currentNumber) {
    intArray.push(Number(currentNumber));
}

console.log(intArray); 
