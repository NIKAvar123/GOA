function checkTriangleSides() {
    const sideA = parseFloat(prompt("შეიყვანეთ პირველი გვერდის სიგრძე:"));
    const sideB = parseFloat(prompt("შეიყვანეთ მეორე გვერდის სიგრძე:"));
    const sideC = parseFloat(prompt("შეიყვანეთ მესამე გვერდის სიგრძე:"));

    if (sideA > 0 && sideB > 0 && sideC > 0) {
        if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
            console.log("ეს სამი გვერდი შეიძლება წარმოადგენდეს სამკუთხედს.");
        } else {
            console.log("ეს გვერდები არ ქმნიან სამკუთხედს.");
        }
    } else {
        console.log("ყველა გვერდის სიგრძე უნდა იყოს დადებითი.");
    }
}


checkTriangleSides();
