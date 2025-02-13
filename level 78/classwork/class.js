function matrixElementLengths(matrix) {
let lengths = [];
    for (let row of matrix) {
        for (let element of row) {
            lengths.push(String(element).length);
        }
    }
    return lengths;
}
const matrix = [[123, 45], [6789, 0], [56, 78901]];
const result = matrixElementLengths(matrix);
console.log(result);