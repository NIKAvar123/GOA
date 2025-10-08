function func3(num1, num2) {
  return new Promise((resolve, reject) => {
    let randomDelay = 1000 + Math.random() * 3000;
    setTimeout(() => {
      resolve(num1 + num2);
    }, randomDelay);
  });
}

Promise.all([func3(12, 6), func3(1, 6), func3(42, 11)])
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((nums) => {
    let sum = 0;
    for (let i of nums) {
      sum += i;
    }
    console.log(sum);
});

////------------------------------------------------------------------------------


function inviteMoreWomen(L) {
  return L.reduce((a,b) => a+b) > 0;
}