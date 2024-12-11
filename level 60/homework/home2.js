function checkNumberConditions(num) {
    if (num % 2 === 0 && num > 10) {
        console.log("რიცხვი ლუწია და 10-ზე მეტია.");
    } else if (num % 2 !== 0 && num < 5) {
        console.log("რიცხვი კენტია და 5-ზე ნაკლებია.");
    } else if (num > 20 || num < 5) {
        console.log("რიცხვი 20-ზე მეტია ან 5-ზე ნაკლებია.");
    } else if (!(num > 10 || num < 5)) {
        console.log("რიცხვი არ არის არც 10-ზე მეტი და არც 5-ზე ნაკლები.");
    } else {
        console.log("პირობებს არაფერი შეესაბამება.");
    }
}


checkNumberConditions(8);
