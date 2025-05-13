function swapValues(arr) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
}

let arr = [1, 2];
swapValues(arr);
console.log(arr); 





function halvingSum(n) {
    let sum = 0;
    while (n > 0){
      sum += n
      n = Math.floor(n / 2)

    }
  return sum
}