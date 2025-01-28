function generateArray(obj) {

    if (!obj.hasOwnProperty("quantity") || !obj.hasOwnProperty("element")) {
        return "ობიექტს უნდა ჰქონდეს 'quantity' და 'element' key-ები.";
    }

    // ვქმნით მასივს და ვავსებთ შესაბამისი რაოდენობის ელემენტით
    return Array(obj.quantity).fill(obj.element);
}

// მაგალითის ობიექტი
const inputObj = {
    quantity: 5,
    element: "Apple"
};

// ფუნქციის გამოძახება და შედეგის გამოტანა
console.log(generateArray(inputObj));
