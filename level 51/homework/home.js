
function findMaxMin(arr) {

    if (arr.length === 0) {
      return [];
    }

    
    let max = Math.max(arr);
    let min = Math.min(arr);
    

    return [max, min];
  }
  

  const numbers = [3, 5, 7, 2, 8, 1];
  const result = findMaxMin(numbers);
  console.log(result);  
