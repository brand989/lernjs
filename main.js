/* 1 task

i = 0;

while (i <= 100) {
    let k = 0;
    for(let j = 2; j < i; j++) {
        if(i % j == 0){
            k++
        }
    }
    if(k==0) console.log(i)    
    i++
};
*/

/* 3 task

for(let i = 0; i <= 9; console.log(i++));

*/

/* 4 task

let arr = ['х']

for(let i = 0; i < 20; i++){
    console.log(arr.join(''))
    arr.push('x')
};

*/




let basket = {
    products: [{name: 'laptop', price: 3500},{name: 'mobeli', price: 4500}],
    count: 0,

    countBasketPrice(){

        this.count = this.products.reduce(function(sum, elem) {
            return sum + elem.price;
        }, 0);

        
    }


}

basket.countBasketPrice();

console.log(Object.values(basket));