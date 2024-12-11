function checkUserAge() {
    const age = parseInt(prompt("გთხოვთ, შეიყვანეთ თქვენი ასაკი:"), 10);
    const parentalConsent = confirm("გაქვთ თუ არა მშობლის თანხმობა?");

    if (age >= 18) {
        console.log("თქვენ სრულწლოვანი ხართ.");
    } else if (age < 18 && parentalConsent) {
        console.log("თქვენ შეგიძლიათ გამოიყენოთ ეს სერვისი.");
    } else {
        console.log("თქვენ ვერ გამოიყენებთ ამ სერვისს.");
    }
}

checkUserAge();
