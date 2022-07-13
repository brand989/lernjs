class Product {

    constructor(name, price) {
        this.name = name
        this.price = price
        this.count = 1
    }

    render() {
        let main = document.querySelector('.catalog')
        let list = document.createElement('div')
        main.appendChild(list)
        list.className = 'catalog-items'
        let itemName = document.createElement('div')
        itemName.innerHTML = `Название: ${this.name}`
        list.appendChild(itemName)

        let itemPrice = document.createElement('div')
        itemPrice.innerHTML = `Стоимость: ${this.price} рублей`
        list.appendChild(itemPrice)

        let button = new ButtonBasket('Купить', 'catalog-button', 'inc')
        button.render(list, this)
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

        this.init()
    }


    init() {

        let header = document.querySelector('header')
        let listbasket = document.createElement('div')
        listbasket.className = 'basket'

        let buttonBasketInit = new Button('корзина', 'button-header')
       
        let fn = function () {
            listbasket.classList.toggle('openBasket')
            
        }

        buttonBasketInit.render(header, fn)
        header.appendChild(listbasket)
    }


    countBasketPrice() {
        return this._products.reduce(function (sum, elem) {
            return sum + elem.price * elem.count;
        }, 0);
    }


    findProduct(product) {
        return this._products.filter((item) => product.name == item.name).length > 0
    }


    addProducts(product) {

        if (this.findProduct(product)) {
            product.inc()
        } else {
            this._products.push(product)
        }

        this.render()
    }

    delProducts(product) {
        if (!this.findProduct(product)) {
            return product
        }

        if (product.count == 1) {
            this._products.splice(this._products.indexOf(product), 1)
        } else {
            product.dec()
        }

        this.render()
    }

    render() {
        let listbasket = document.querySelector('.basket')
        let list = document.createElement('div')
        listbasket.innerHTML = ''
        listbasket.appendChild(list)
        list.className = 'basket-list'


        this._products.forEach((item) => {
            let div = document.createElement('div')
            div.innerHTML = `${item.name} по цене ${item.price} в количестве  ${item.count}`
            list.appendChild(div)

            let buttonInc = new ButtonBasket('+','butten-count','inc')
            buttonInc.render(div, item)

            let buttonDec = new ButtonBasket('-', 'butten-count', 'dec')
            buttonDec.render(div, item)
        })


        if (!this._products.length) {
            let emptyBasket = document.createElement('div')
            emptyBasket.innerHTML = `Корзина пуста`
            listbasket.appendChild(emptyBasket)
        } else {
            let totalPrice = document.createElement('div')
            totalPrice.innerHTML = `Итого стоимость ${this.countBasketPrice()}`
            listbasket.appendChild(totalPrice)
        }



    }

}


class Button {
    text = ''

    constructor(text, clss) {
        this.text = text
        this.clss = clss
    }

    onClick(fn, item) {
        fn(item)
    }

    getHTML() {
        const btn = document.createElement('div')
        btn.innerHTML = `<span>${this.text}</span>`
        btn.classList.add('button')
        btn.classList.add(this.clss)
        return btn
    }

    render(blockToRender, fn, item) {
        const btn = this.getHTML()
        console.log(fn)
        blockToRender.appendChild(btn)

        btn.addEventListener('click', () => this.onClick(fn, item))

    }
}



class ButtonBasket extends Button {

    constructor(text, clss, task) {
        super(text, clss)
        this.task = task
    }


    render(blockToRender, item) {
        const btn = this.getHTML()
        blockToRender.appendChild(btn)

        btn.addEventListener('click', () => {
            const basketUser = new Basket()

            if (this.task == 'inc') {
                let fn = basketUser.addProducts.bind(basketUser)
                this.onClick(fn, item)
            } else if (this.task == 'dec') {
                let fn = basketUser.delProducts.bind(basketUser)
                this.onClick(fn, item)
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