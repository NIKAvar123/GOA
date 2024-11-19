function processInput(value) {
    if (typeof value === 'string') {
        return value.length;
    } else if (typeof value === 'number') {
        return value > 100;
    } else if (typeof value === 'boolean') {
        return !value;
    } else {
        throw new Error('Unsupported data type');
    }
}
console.log(processInput("hello"));   
console.log(processInput(150));       
console.log(processInput(50));        
console.log(processInput(true));      
console.log(processInput(false));     
