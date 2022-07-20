import Button from './button.js'
import './style.css'


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


        let button = new BasketButton('Купить', 'catalog-button', (item) => {
            const basketUser = new Basket()
            basketUser.addProducts(item)
        }, this)
        button.render(list)

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
    }


    render() {
        this._products.forEach(element => element.render());

    }

}


class catalogList extends List {
    constructor(...products) {
        super(...products)
        this.numProduct = 0
        this.availableProducts = true
    }

    addCatalogList(product) {
        this._products.push(product)
    }

    async fetchPoducts() {
        let response = await fetch('http://localhost:3000/database.json')
        let json = await response.json()
        let data = await json.data

        data.forEach(item => {
            this._products.push(new Product(item.name, item.price))
        })

        this.render()
    }


    render() {
        let catalog = document.querySelector('.catalog')
        catalog.innerHTML = ''


        for (let i = 0; i < this.numProduct + 2; i++) {
            if (this._products[i]) {
                this._products[i].render()
            }
        }

        this.numProduct += 2

        this.availableProducts = this._products[this.numProduct]

        if (this.availableProducts) {
            let buttonAddProduct = new Button('Добавить еще', 'button-add', this.render.bind(this))
            buttonAddProduct.render(catalog)
        }

    }

}



class Basket extends List {
    _products = []

    constructor(...products) {

        super(...products)

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
        listbasket.classList.add('openBasket')

        let fn = function () {
            listbasket.classList.toggle('openBasket')
        }

        let buttonBasketInit = new Button('корзина', 'button-header', fn)
        buttonBasketInit.render(header)


        header.appendChild(listbasket)

        let emptyBasket = document.createElement('div')
        emptyBasket.innerHTML = `Корзина пуста`
        listbasket.appendChild(emptyBasket)

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

    decProducts(product) {
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


    deleteProduct(product) {
        if (!this.findProduct(product)) {
            return product
        }

        product.count = 1
        this._products.splice(this._products.indexOf(product), 1)

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

            let buttonInc = new BasketButton('+', 'butten-count', this.addProducts.bind(this), item)
            buttonInc.render(div)

            let buttonDec = new BasketButton('-', 'butten-count', this.decProducts.bind(this), item)
            buttonDec.render(div)

            let buttonDelete = new BasketButton('Удалить товар', 'butten-count', this.deleteProduct.bind(this), item)
            buttonDelete.render(div)
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


class BasketButton extends Button {
    constructor(text, clss, clb, obj) {
        super(text, clss, clb)
        this.obj = obj
    }

    render(blockToRender) {
        const btn = this.getHTML()
        blockToRender.appendChild(btn)
        btn.addEventListener('click', () => this.onClick(this.clb, this.obj))

    }
}


const basketUser = new Basket();
const newList = new catalogList()
newList.fetchPoducts()




class Form {
    inputs = []

    constructor(...inputs) {
        this.inputs.push(...inputs)

    }


    render() {
        const form = document.createElement('form')
        const feedback = document.querySelector('.feedback')
        form.setAttribute('action', 'Post')
        feedback.appendChild(form)

        form.innerHTML = `
            <p>Заполните форму</p>
        `

        this.inputs.forEach(element => element.render());

        const submitName = document.createElement('input')
        submitName.setAttribute('type', 'submit')

    }
}



class Input {
    value = ''
    type = ''
    name = ''
    valid = true


    constructor(type, name, regexp) {
        this.value
        this.type = type
        this.name = name
        this.regexp = regexp
    }


    isValid(value) {
        const regexp = this.regexp
        return value.match(regexp)

    }

    render(placeTpRender) {
        placeTpRender = document.querySelector('form')
        const fieldset = document.createElement('fieldset')

        if (this.type == 'text') {
            fieldset.innerHTML = `<legend>${this.name}</legend>`
        }

        const inputName = document.createElement('input')
        inputName.setAttribute('type', this.type)
        inputName.setAttribute('name', this.name)

        if(!this.valid){
            inputName.classList.add('red-border')
            console.log('red-border')
        } else {
            inputName.classList.remove('red-border')
        }


        inputName.addEventListener('input', (event) => {

            if (!this.isValid(inputName.value)) {
                inputName.classList.add('red-border')
            } else {
                inputName.classList.remove('red-border')
            }

        })

        placeTpRender.appendChild(fieldset)
        fieldset.appendChild(inputName)
    }
}


const inputName = new Input('text', 'name', /^[a-zA-Z]+$/ )
const inputPhone = new Input('text', 'phone', /^\+[78]\(\d{3}\)\d{3}-\d{4}\b/)
const inputMail = new Input('text', 'mail', /^[a-z]+[\.\-]*?[a-z]+\@[a-z]+\.ru/)
const sumbitMail = new Input('submit', 'button')
const feedbackForm = new Form(inputName, inputPhone, inputMail, sumbitMail)


feedbackForm.render()