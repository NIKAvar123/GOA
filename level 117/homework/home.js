class Product{
    constructor(name, price){
        this.name = name;
        this ._price = price;
    }


    set price(value){
        if(value < 0){
            console. log("Price can not be negative");
        } else{
            this. price = value
        }
    }

    get price(){
        return this. _price
    }

}

let product1 = new Product('Ice Cream', 2.0)
product1.price = -1.7



console.log(product1.price);


