
let N = parseInt(prompt("შეიტანეთ N (რიცხვების რაოდენობა):"));


let numbers = [];

for (let i = 0; i < N; i++) {
    let num = parseInt(prompt(`შეიტანეთ რიცხვი #${i + 1}:`));
    numbers.push(num);
}


console.log("მასივი:", numbers);
