class Product {

    constructor(name, price) {
        this.name = name
        this.price = price
    }

    render() {
        let main = document.querySelector('main')
        let list = document.createElement('div')
        main.appendChild(list)
        list.className = 'catalog'
        let item = document.createElement('div')
        item.innerHTML = `${this.name} стоит ${this.price}`
        list.appendChild(item)
        let button = new Button('Купить')
        button.render(item, this.name, this.price )

    }

}

class List {
    _products = []

    constructor(...products) {
        this._products.push(...products)
        this.render()
    }

    render(){
        this._products.forEach(element => element.render());
    }

}


class Basket {
    _products = []

    constructor(...products) {
        this._products.push(...products)
    }

    countBasketPrice() {
        return this._products.reduce(function (sum, elem) {
            return sum + elem.price;
        }, 0);
    }

    addProducts(product) {
        this._products.push(product)
        this.render()
    }

    render() {
        let header = document.querySelector('header')
        let list = document.createElement('div')
        header.innerHTML = ''
        header.appendChild(list)
        list.className = 'basket'

        for (let i = 0; i < this._products.length; i++) {
            let item = document.createElement('div')
            item.innerHTML = `${this._products[i].name} по цене ${this._products[i].price}`
            list.appendChild(item)
        }

        let totalPrice = document.createElement('div')
        totalPrice.innerHTML = `Итого стоимость ${this.countBasketPrice()}`
        header.appendChild(totalPrice)

    }

}


class Button {
    text = ''

    constructor(text) {
        this.text = text
    }

    onClick(fn, item) {
        console.log(fn, item)
        fn(item)

    }

    getHTML() {
        const btn = document.createElement('div')
        btn.innerHTML = `<span>${this.text}</span>`
        return btn
    }

    render(blockToRender, name, price) {
        const btn = this.getHTML()
        blockToRender.appendChild(btn)

        btn.addEventListener('click', () => {
            this.onClick(basketUser.addProducts.bind(basketUser), {name, price})
        })
    }
}




let laptop = new Product('laptop', 4500);
let mobile = new Product('mobile', 5500);
let tablet = new Product('tablet', 2100);

const basketUser = new Basket(tablet);


const newList = new List(mobile, tablet, laptop)

basketUser.addProducts(laptop);


basketUser.render()

