function calculate(a, b, operation) {
    return operation(a, b);
}

// მაგალითი:
const sum = (x, y) => x + y;
const product = (x, y) => x * y;
const difference = (x, y) => x - y;

console.log(calculate(5, 3, sum));        // 8
console.log(calculate(5, 3, product));    // 15
console.log(calculate(5, 3, difference)); // 2



//____________________________________________________

function customFilter(array, callback) {
    const result = [];
    for (const item of array) {
        if (callback(item)) {
            result.push(item);
        }
    }
    return result;
}

// მაგალითი:
const numbers = [1, 2, 3, 4, 5, 6];
const isEven = n => n % 2 === 0;

console.log(customFilter(numbers, isEven)); // [2, 4, 6]


//____________________________________________________

function customMap(array, callback) {
    const result = [];
    for (const item of array) {
        result.push(callback(item));
    }
    return result;
}

// მაგალითი:
const square = n => n * n;
console.log(customMap([1, 2, 3, 4], square)); // [1, 4, 9, 16]


//____________________________________________________


setTimeout(() => {
    console.log("ნაბიჯი 1");
    setTimeout(() => {
        console.log("ნაბიჯი 2");
        setTimeout(() => {
            console.log("ნაბიჯი 3");
        }, 1000);
    }, 1000);
}, 1000);
