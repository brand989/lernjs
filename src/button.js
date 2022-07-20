export default class Button {
    text = ''

    constructor(text, clss, clb) {
        this.text = text
        this.clss = clss
        this.clb = clb

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

    render(blockToRender) {
        const btn = this.getHTML()
        blockToRender.appendChild(btn)
        btn.addEventListener('click', () => this.onClick(this.clb))

    }
}