function Numbers2Darray(array) {
    let result = [];
    

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            
            if (array[i][j] % 2 === 0) {
                result.push(array[i][j]);
            }
        }
    }
    
    return result;
}
