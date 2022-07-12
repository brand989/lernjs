class Product {


    constructor(name, price) {
        this.name = name
        this.price = price
        this.count = 1
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
        button.render(item, '+', this)

    }


    inc() {
        this.count++
    }


    dec() {
        if (this.count > 0) {
            this.count--
        }
    }
}

class List {
    _products = []

    constructor(...products) {
        this._products.push(...products)
        this.render()
    }

    render() {
        this._products.forEach(element => element.render());
    }

}


class Basket {
    _products = []

    constructor() {

        if (Basket._instance) {
            return Basket._instance
        }

        Basket._instance = this
    }

    countBasketPrice() {
        return this._products.reduce(function (sum, elem) {
            return sum + elem.price * elem.count;
        }, 0);
    }

    addProducts(product) {

        let j = 0
        for (let i = 0; i < this._products.length; i++) {

            if (product.name == this._products[i].name) {
                this._products[i].inc()
            } else {
                j++
            }
        }

        if (j == this._products.length) {
            this._products.push(product)

        }

        this.render()

    }

    delProducts(product) {

        for (let i = 0; i < this._products.length; i++) {

            if (product.name == this._products[i].name) {

                if (this._products[i].count == 1) {
                    this._products.splice([i], 1)
                    console.log(this._products)
                } else {
                    this._products[i].dec()
                }
            }
        }



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
            item.innerHTML = `${this._products[i].name} по цене ${this._products[i].price} в количестве  ${this._products[i].count}`
            list.appendChild(item)
            let buttonInc = new Button('+')
            buttonInc.render(item, '+', this._products[i])

            let buttonDec = new Button('-')
            buttonDec.render(item, '-', this._products[i])
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

        fn(item)
    }

    getHTML() {
        const btn = document.createElement('div')
        btn.innerHTML = `<span>${this.text}</span>`
        return btn
    }

    render(blockToRender, or, obj) {

        const btn = this.getHTML()
        blockToRender.appendChild(btn)


        btn.addEventListener('click', () => {
            const basketUser = new Basket()

            if (or == "+") {
                let fn = basketUser.addProducts.bind(basketUser)
                this.onClick(fn, obj)
            } else if (or == "-") {
                let fn = basketUser.delProducts.bind(basketUser)
                this.onClick(fn, obj)
            }

            

           
        })


    }
}




let laptop = new Product('laptop', 4500);
let mobile = new Product('mobile', 5500);
let tablet = new Product('tablet', 2100);

const basketUser = new Basket();


const newList = new List(mobile, tablet, laptop)

basketUser.addProducts(laptop);


basketUser.render()