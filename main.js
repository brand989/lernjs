
/* task 1

let numberInObject = function(number){
    
    if(number > 999){
        console.log("число больше 999");
        return {};
    }

    let units = number % 10;
    let tens = Math.floor(number % 100 / 10);
    let hundreds = Math.floor(number / 100); 

    let Object = {'единицы': units, 'десятки': tens, 'сотни': hundreds};

    console.log(Object);

    return Object;

   
}

numberInObject(4561);

*/

class Product {
  
    constructor (name,  price) {
        this.name = name
        this.price = price
    }


}


let laptop = new Product('laptop', 4500);
let mobile = new Product('mobile', 5500);


class Basket {
    products = []
    count = 0

    constructor(){
        this.products = this.products
    }

    countBasketPrice(){
        this.count = this.products.reduce(function(sum, elem) {
            return sum + elem.price;
        }, 0);
    }

    addProducts(product){
        this.products.push(product)
    }


}



const basketUser = new Basket();

basketUser.addProducts(laptop);
basketUser.addProducts(mobile);

basketUser.countBasketPrice();

console.log(Object.values(basketUser));




