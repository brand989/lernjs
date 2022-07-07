class Button {
  text = ''

  constructor(text) {
    this.text = text
  }

  onClick() {
    console.log('Clicked')
  }

  getHTML() {
    const btn = document.createElement('div')
    btn.innerHTML = `<span>${this.text}</span>`
    return btn
  }

  render(blockToRender) {
    const btn = this.getHTML()
    blockToRender.appendChild(btn)

    btn.addEventListener('click', () => {
      this.onClick()
    })
  }
}




class GreenButton extends Button {
  constructor(text) {
    super(text)
  }

  getHTML() {
    const btn = document.createElement('div')
    btn.innerHTML = `<span style="color: green">${this.text}</span>`
    return btn
  }
}



class ButtonOther extends Button {
  constructor(text) {
    super(text)
  }

  onClick() {
    console.log('Helo from ButtonOther')
  }
}

const MyMainBlock = document.querySelector('main')
const MyButton = new Button('Click me!')
MyButton.render(MyMainBlock)
const MyGreenButton = new GreenButton('Click me (green)!')
MyGreenButton.render(MyMainBlock)
const MyOtherButton = new ButtonOther('Click me (other)!')
MyOtherButton.render(MyMainBlock)